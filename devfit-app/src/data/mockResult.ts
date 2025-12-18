import type { AnalysisResult } from "@/types";
import { mockApiResponse } from "./mockApiResponse";
import { transformApiResponse } from "@/utils/transformApiResponse";

// 백엔드 API 응답을 변환하여 mockResult 생성
export const mockResult: AnalysisResult = transformApiResponse(mockApiResponse);
