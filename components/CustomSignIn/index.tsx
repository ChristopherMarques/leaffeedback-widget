import { SignIn } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

export function CustomSignIn() {
  return (
    <SignIn
      appearance={{
        baseTheme: dark,
        elements: {
          formButtonPrimary: 
            "bg-primary text-primary-foreground shadow hover:bg-primary/90",
          card: "bg-background border border-border",
          headerTitle: "text-foreground",
          headerSubtitle: "text-muted-foreground",
          socialButtonsBlockButton: 
            "bg-muted text-muted-foreground hover:bg-muted/90",
          formFieldLabel: "text-foreground",
          formFieldInput: 
            "bg-background border border-input text-foreground",
          footerActionLink: "text-primary hover:text-primary/90",
        },
      }}
    />
  );
}
