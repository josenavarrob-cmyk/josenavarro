import { siteConfig } from "@/lib/site";

export function ConstructionNotice() {
  if (!siteConfig.underConstruction) {
    return null;
  }

  return (
    <div className="border-b border-line bg-[#f7f7f4]">
      <div className="container-narrow py-3 text-sm text-muted">
        <p>
          This site is under construction. Essays shown here are placeholder
          samples, not published work.
        </p>
      </div>
    </div>
  );
}
