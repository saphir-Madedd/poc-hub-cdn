const CDN_BASE_URL =
  process.env.BRAND_CDN_BASE_URL ?? "https://cdn.example.com";
const DEFAULT_CLIENT = "default";
const THEME_FILE = process.env.BRAND_THEME_FILE ?? "theme.css";
const LOGO_FILE = process.env.BRAND_LOGO_FILE ?? "logo.svg";

function sanitizeClient(value: string) {
  const sanitized = value.toLowerCase().replace(/[^a-z0-9-]/g, "");
  return sanitized || DEFAULT_CLIENT;
}

function sanitizeBrandKey(value: string) {
  const sanitized = value.toLowerCase().replace(/[^a-z0-9.-]/g, "");
  return sanitized || DEFAULT_CLIENT;
}

function sanitizeFileName(value: string) {
  return value.replace(/[^a-zA-Z0-9._-]/g, "") || "theme.css";
}

function getHostname(host: string | null | undefined) {
  if (!host) return DEFAULT_CLIENT;

  const normalizedHost = host.trim().toLowerCase();

  if (normalizedHost.startsWith("[")) {
    const endOfIpv6Host = normalizedHost.indexOf("]");
    return endOfIpv6Host === -1
      ? normalizedHost
      : normalizedHost.slice(0, endOfIpv6Host + 1);
  }

  return normalizedHost.split(":")[0] ?? DEFAULT_CLIENT;
}

function normalizeDomainBrand(hostname: string) {
  const domain = hostname.startsWith("www.")
    ? hostname.slice("www.".length)
    : hostname;
  return domain.split(".")[0] ?? DEFAULT_CLIENT;
}

function getConfiguredDomainClient(hostname: string) {
  const configuredDomainClients = process.env.BRAND_DOMAIN_CLIENTS ?? "";

  for (const entry of configuredDomainClients.split(",")) {
    const [domain, client] = entry.split(":").map((value) => value?.trim());

    if (domain?.toLowerCase() === hostname && client) {
      return sanitizeBrandKey(client);
    }
  }
}

export function getClientFromHost(host: string | null | undefined) {
  const hostname = getHostname(host);

  const configuredClient = getConfiguredDomainClient(hostname);
  if (configuredClient) return configuredClient;

  if (
    !hostname ||
    hostname === "localhost" ||
    hostname === "127.0.0.1" ||
    hostname === "[::1]"
  ) {
    return DEFAULT_CLIENT;
  }

  if (hostname.endsWith(".localhost")) {
    const localClient = hostname.slice(0, -".localhost".length).split(".")[0];
    return sanitizeClient(localClient);
  }

  return sanitizeBrandKey(normalizeDomainBrand(hostname));
}

function isLocalSimulationHost(host: string | null | undefined) {
  const hostname = getHostname(host);

  return (
    !hostname ||
    hostname === "localhost" ||
    hostname === "127.0.0.1" ||
    hostname === "[::1]" ||
    hostname.endsWith(".localhost") ||
    hostname.endsWith(".test")
  );
}

export function getThemeCssUrl({
  client,
  host,
}: {
  client: string;
  host: string | null | undefined;
}) {
  if (isLocalSimulationHost(host)) {
    return `/brands/${client}/${sanitizeFileName(THEME_FILE)}`;
  }

  return `${CDN_BASE_URL}/brands/${client}/${sanitizeFileName(THEME_FILE)}`;
}

export function getLogoUrl({
  client,
  host,
}: {
  client: string;
  host: string | null | undefined;
}) {
  if (isLocalSimulationHost(host)) {
    return `/brands/${client}/${sanitizeFileName(LOGO_FILE)}`;
  }

  return `${CDN_BASE_URL}/brands/${client}/${sanitizeFileName(LOGO_FILE)}`;
}

export function getMediaUrl({
  client,
  host,
}: {
  client: string;
  host: string | null | undefined;
}) {
  if (isLocalSimulationHost(host)) {
    return `/brands/${client}/media.png`;
  }

  return `${CDN_BASE_URL}/brands/${client}/media.png`;
}

//TO DO : URL CONFIG FILE MARK= SUB -- domain
