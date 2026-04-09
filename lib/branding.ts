const CDN_BASE_URL = "https://cdn.example.com";
const DEFAULT_CLIENT = "default";

function sanitizeClient(value: string) {
  const sanitized = value.toLowerCase().replace(/[^a-z0-9-]/g, "");
  return sanitized || DEFAULT_CLIENT;
}

export function getClientFromHost(host: string | null | undefined) {
  if (!host) return DEFAULT_CLIENT;

  const hostname = host.split(":")[0]?.trim().toLowerCase();

  if (!hostname || hostname === "localhost" || hostname === "127.0.0.1" || hostname === "[::1]") {
    return DEFAULT_CLIENT;
  }

  if (hostname.endsWith(".localhost")) {
    const localClient = hostname.slice(0, -".localhost".length).split(".")[0];
    return sanitizeClient(localClient);
  }

  const segments = hostname.split(".").filter(Boolean);
  if (segments.length >= 3) return sanitizeClient(segments[0]);

  return DEFAULT_CLIENT;
}

function isLocalSimulationHost(host: string | null | undefined) {
  if (!host) return true;
  const hostname = host.split(":")[0]?.trim().toLowerCase();

  return (
    !hostname ||
    hostname === "localhost" ||
    hostname === "127.0.0.1" ||
    hostname === "[::1]" ||
    hostname.endsWith(".localhost")
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
    return `/brands/${client}/theme.css`;
  }

  return `${CDN_BASE_URL}/brands/${client}/theme.css`;
}

export function getLogoUrl({
  client,
  host,
}: {
  client: string;
  host: string | null | undefined;
}) {
  if (isLocalSimulationHost(host)) {
    return `/brands/${client}/logo.svg`;
  }

  return `${CDN_BASE_URL}/brands/${client}/logo.svg`;
}
