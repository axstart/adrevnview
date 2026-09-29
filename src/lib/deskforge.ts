/**
 * DeskForge (tenant adrevnview) — help portal + messenger widget.
 *
 * Set in .env / Vercel:
 * - VITE_DESKFORGE_URL (e.g. https://deskforge-axadrev.vercel.app)
 * - VITE_DESKFORGE_WIDGET_KEY (public widget key after DeskForge provision)
 *
 * Do not invent a real key. After provisioning the adrevnview tenant in DeskForge,
 * copy the public key from Admin → Widget. The placeholder never loads the script.
 */

export const DESKFORGE_PLACEHOLDER_WIDGET_KEY = "df_pk_replace_after_provision";
export const DESKFORGE_TENANT_SLUG = "adrevnview";

export function normalizeDeskforgeOrigin(raw?: string | null) {
  const value = (raw ?? "").trim();
  if (!value) return "";
  return value.replace(/\/$/, "");
}

export function deskforgeOrigin() {
  return normalizeDeskforgeOrigin(import.meta.env.VITE_DESKFORGE_URL as string | undefined);
}

export function deskforgePortalUrl(origin = deskforgeOrigin()) {
  return origin ? `${origin}/portal?tenant=${DESKFORGE_TENANT_SLUG}` : "";
}

export function isDeskforgeWidgetKeyReady(key?: string | null) {
  const value = (key ?? "").trim();
  return Boolean(value) && value !== DESKFORGE_PLACEHOLDER_WIDGET_KEY;
}

export function deskforgeWidgetKey() {
  const key = (import.meta.env.VITE_DESKFORGE_WIDGET_KEY as string | undefined)?.trim();
  return isDeskforgeWidgetKeyReady(key) ? key! : "";
}

export function isDeskforgePublicPath(pathname: string) {
  return !pathname.startsWith("/admin");
}
