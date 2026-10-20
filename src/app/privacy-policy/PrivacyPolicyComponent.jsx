"use client";

import React from "react";
import Link from "next/link";
import { Lock, FileCheck, ArrowLeft } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export function PrivacyPolicyComponent() {
  return (
    <section className="min-h-screen pt-32 pb-20 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full text-center space-y-6">
        <div className="flex justify-center">
          <Badge variant="silver">
            <Lock className="w-3.5 h-3.5 text-silver-metallic" />
            Confidentiality & Protection
          </Badge>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-metallic-gradient">
          ... Privacy and Policy
        </h1>

        <p className="text-silver-chrome max-w-xl mx-auto text-base sm:text-lg leading-relaxed">
          Royal Motors adheres to strict international high-net-worth privacy protocols, military-grade client telemetry encryption, and non-disclosure standards.
        </p>

        {/* Temporary Routing Test Card */}
        <div className="glass-panel rounded-2xl p-8 max-w-lg mx-auto border border-white/10 text-left space-y-4 shadow-card-luxury">
          <div className="flex items-center gap-3">
            <FileCheck className="w-5 h-5 text-silver-metallic" />
            <h2 className="text-lg font-semibold text-silver-light">Module Status: Active</h2>
          </div>
          <p className="text-xs text-silver-chrome">
            Route: <span className="font-mono text-silver-metallic">/privacy-policy</span>
          </p>
          <p className="text-xs text-silver-chrome">
            Component: <span className="font-mono text-silver-metallic">src/app/privacy-policy/PrivacyPolicyComponent.jsx</span>
          </p>
          <div className="pt-2">
            <Link href="/">
              <Button variant="outline" size="sm" className="gap-2">
                <ArrowLeft className="w-4 h-4" /> Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
