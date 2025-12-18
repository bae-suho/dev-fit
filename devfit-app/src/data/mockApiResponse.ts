import type { FullApiResponse } from "@/types";
import mockCompanyAnalysis from "./mockCompanyAnalysis.json";
import mockUserAnalysis from "./mockUserAnalysis.json";
import mockCompareAnalysis from "./mockCompareAnalysis.json";

export const mockApiResponse: FullApiResponse = {
  schema_version: "1.0",
  meta: {
    generated_at: mockCompareAnalysis.meta.generated_at,
    scoring_version: mockCompareAnalysis.meta.scoring_version,
    notes: mockCompareAnalysis.meta.notes,
  },
  company_analysis: mockCompanyAnalysis as FullApiResponse["company_analysis"],
  candidate_analysis: mockUserAnalysis as FullApiResponse["candidate_analysis"],
  culture_fit_result: mockCompareAnalysis as unknown as FullApiResponse["culture_fit_result"],
};
