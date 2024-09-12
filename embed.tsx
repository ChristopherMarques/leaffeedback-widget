import React from "react";
import { createRoot } from "react-dom/client";
import EmbeddableFeedback from "@/components/EmbedableFeedback";

interface FeedbackWidgetConfig {
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  primaryColor: string;
  companyName: string;
}

export const normalizeAttribute = (attribute: string) => {
  return attribute.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
};

class FeedbackWidget extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    if (this.shadowRoot) {
      const props = this.getPropsFromAttributes() as FeedbackWidgetConfig;
      const root = createRoot(this.shadowRoot);
      root.render(React.createElement(EmbeddableFeedback, props));
    }
  }

  getPropsFromAttributes(): FeedbackWidgetConfig {
    const attrs = Object.fromEntries(
      Array.from(this.attributes).map(({ name, value }) => [
        normalizeAttribute(name),
        value,
      ])
    );
    return {
      position: attrs.position as FeedbackWidgetConfig["position"],
      primaryColor: attrs.primaryColor,
      companyName: attrs.companyName,
    };
  }
}

export default FeedbackWidget;
