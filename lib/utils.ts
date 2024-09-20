import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { Config } from "./types";
import { NextRouter } from "next/router";
import { useRouter } from "next/router";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const generateEmbedCode = (config: Config): string => {
  return `
<!-- Begin Feedback Widget -->
<div id="feedback-widget"></div>
<script src="${process.env.NEXT_PUBLIC_FEEDBACK_WIDGET_URL}"></script>
<script>
  initializeFeedbackWidget('feedback-widget', ${JSON.stringify(
    config,
    null,
    2
  )});
</script>
<!-- End Feedback Widget -->`.trim();
};
