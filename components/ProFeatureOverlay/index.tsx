import React from "react";
import { Lock } from "lucide-react";
import { Button } from "../ui/button";

const ProFeatureOverlay = ({
  children,
  hasPro,
}: {
  children: React.ReactNode;
  hasPro: boolean;
}) => {
  return (
    <div className="relative">
      {!hasPro && (
        <div className="absolute inset-0 bg-accent/75 flex items-center justify-center z-10 rounded-xl">
          <div className="text-center">
            <Lock className="mx-auto mb-2" />
            <p>Activate Pro plan to use this feature</p>
            <Button
              variant="outline"
              className="mt-4"
              onClick={() => {
                window.location.href = "/dashboard?tab=manage-plan";
              }}
            >
              Upgrade Now
            </Button>
          </div>
        </div>
      )}
      {children}
    </div>
  );
};

export default ProFeatureOverlay;
