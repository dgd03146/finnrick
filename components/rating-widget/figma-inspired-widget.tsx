"use client"

import { Card, CardContent } from "@/components/ui/card"
import { HelpCircle } from "lucide-react"

type RatingGrade = "A" | "B" | "C" | "D" | "E"

interface FigmaInspiredWidgetProps {
  rating: RatingGrade
  ratingLabel?: string
  vendor: string
  compound: string
  samplesCount: number
  lastTestedDate: string
  logoUrl?: string
  variant?: "desktop" | "mobile" | "compact"
  showTooltip?: boolean
}

const RATING_COLORS: Record<RatingGrade, string> = {
  A: "bg-[rgb(14,138,74)]",
  B: "bg-[rgb(115,200,44)]", 
  C: "bg-[rgb(255,184,0)]",
  D: "bg-[rgb(244,114,22)]",
  E: "bg-[rgb(239,49,32)]"
} as const

const RATING_LABELS: Record<RatingGrade, string> = {
  A: "GREAT",
  B: "GOOD", 
  C: "OKAY",
  D: "POOR",
  E: "BAD"
} as const

export default function FigmaInspiredWidget({
  rating = "A",
  ratingLabel,
  vendor = "Polaris Peptides",
  compound = "Semaglutide",
  samplesCount = 6,
  lastTestedDate = "19 Feb 2025",
  logoUrl,
  variant = "desktop",
  showTooltip = true
}: FigmaInspiredWidgetProps) {
  const ratingColor = RATING_COLORS[rating]
  const displayLabel = ratingLabel || RATING_LABELS[rating]
  const isCompact = variant === "compact"
  const isMobile = variant === "mobile"

  const handleLearnMore = () => {
    if (typeof window !== 'undefined') {
      window.open('https://finnrick.com', '_blank')
    }
  }

  if (isCompact) {
    return (
      <Card className="w-full max-w-xs bg-gray-50 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
        <CardContent className="p-3">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <div className={`w-8 h-8 rounded-full ${ratingColor} flex items-center justify-center`}>
                <span className="text-sm font-bold text-white">{rating}</span>
              </div>
              <span className="text-xs font-medium text-gray-600 uppercase tracking-wide">
                {displayLabel}
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-gray-900 truncate">{vendor}</p>
            </div>
          </div>
          
          <div className="flex items-center justify-center mt-3 pt-2 border-t border-gray-200">
            <div className="flex items-center gap-1 text-xs text-gray-500">
              <span>Verified by</span>
              <img
                src={logoUrl || "/finnrick-logo.svg"}
                alt="Finnrick"
                className="h-3 opacity-75"
              />
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className={`
      w-full bg-gray-50 border border-gray-200 rounded-lg 
      shadow-sm hover:shadow-md transition-all duration-200
      ${isMobile ? "max-w-xs" : "max-w-sm"}
    `}>
      <CardContent className="p-4">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-gray-900 uppercase tracking-wide">
              FINNRICK RATING™
            </span>
            {showTooltip && (
              <HelpCircle className="w-3 h-3 text-gray-400" />
            )}
          </div>
        </div>

        <div className={`flex ${isMobile ? "flex-col items-center gap-3" : "items-center gap-4"}`}>
          <div className="flex items-center gap-3">
            <div className={`
              w-12 h-12 rounded-full ${ratingColor} 
              flex items-center justify-center
              shadow-sm
            `}>
              <span className="text-xl font-bold text-white">{rating}</span>
            </div>
            <div className="bg-gray-900 px-2 py-1 rounded">
              <span className="text-xs font-bold text-white uppercase tracking-wide">
                {displayLabel}
              </span>
            </div>
          </div>

          <div className={`flex-1 ${isMobile ? "text-center" : "text-left"} min-w-0`}>
            <h3 className="font-bold text-gray-900 text-sm leading-tight mb-1">
              {vendor}
            </h3>
            <p className="font-semibold text-gray-900 text-sm leading-tight mb-2">
              {compound}
            </p>
            <div className={`space-y-0.5 text-xs text-gray-600 ${isMobile ? "text-center" : ""}`}>
              <p>Tested {samplesCount} Samples</p>
              <p>Last test {lastTestedDate}</p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-200">
          <div className="flex items-center gap-2">
            <span className="text-xs font-medium text-gray-500">
              Powered by
            </span>
            <img
              src={logoUrl || "/finnrick-logo.svg"}
              alt="Finnrick"
              className="h-4 opacity-75 hover:opacity-100 transition-opacity"
            />
          </div>
          
          <button 
            className="text-xs text-blue-600 hover:text-blue-800 font-medium transition-colors hover:underline"
            onClick={handleLearnMore}
          >
            Learn More
          </button>
        </div>
      </CardContent>
    </Card>
  )
} 