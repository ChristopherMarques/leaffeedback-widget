import { normalizeAttribute } from "@/utils/utils";
import ReactDom from "react-dom/client";
import EmbedableFeedback from "@/components/EmbedableFeedback";

type Position = "bottom-right" | "top-left" | "top-right" | "bottom-left";

interface WidgetProps {
  position?: Position;
  primaryColor?: string;
  companyName?: string;
  [key: string]: string | undefined;
}

class WidgetWebComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    const props = this.getPropsFromAttributes();
    if (this.shadowRoot) {
      const root = ReactDom.createRoot(this.shadowRoot);
      root.render(
        <EmbedableFeedback
          position={(props.position as Position) || "bottom-right"}
          primaryColor={props.primaryColor || "#000000"}
          companyName={props.companyName || "Empresa"}
          {...props}
        />
      );
    }
  }

  getPropsFromAttributes(): WidgetProps {
    const props: WidgetProps = {};
    for (const { name, value } of this.attributes) {
      props[normalizeAttribute(name)] = value;
    }
    return props;
  }
}

export default WidgetWebComponent;
