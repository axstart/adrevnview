import { useEffect } from "react";
import {
  deskforgeOrigin,
  deskforgeWidgetKey,
  isDeskforgePublicPath,
} from "@/lib/deskforge";

const SCRIPT_MARK = "data-deskforge-widget";

/**
 * Loads DeskForge messenger on public pages when both
 * VITE_DESKFORGE_URL and a real VITE_DESKFORGE_WIDGET_KEY are set.
 * Path changes are handled by widget.js itself via history hooks.
 */
export function DeskForgeWidget() {
  useEffect(() => {
    const ensure = () => {
      if (!isDeskforgePublicPath(window.location.pathname)) return;

      const origin = deskforgeOrigin();
      const key = deskforgeWidgetKey();
      if (!origin || !key) return;
      if (document.querySelector(`script[${SCRIPT_MARK}]`)) return;

      const script = document.createElement("script");
      script.src = `${origin}/widget.js`;
      script.async = true;
      script.setAttribute("data-key", key);
      script.setAttribute(SCRIPT_MARK, "1");
      document.body.appendChild(script);
    };

    ensure();
    window.addEventListener("popstate", ensure);
    return () => window.removeEventListener("popstate", ensure);
  }, []);

  return null;
}
