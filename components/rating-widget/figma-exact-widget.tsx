"use client"

import { HelpCircle } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

type RatingGrade = "A" | "B" | "C" | "D" | "E"

interface FigmaExactWidgetProps {
  rating: RatingGrade
  ratingLabel?: string
  vendor: string
  productName: string
  samplesCount: number
  lastTestDate: string
  interactive?: boolean
}

const RATING_COLORS: Record<RatingGrade, string> = {
  A: "rgb(14, 138, 74)",
  B: "rgb(115, 200, 44)", 
  C: "rgb(255, 184, 0)",
  D: "rgb(244, 114, 22)",
  E: "rgb(239, 49, 32)"
} as const

const RATING_LABELS: Record<RatingGrade, string> = {
  A: "GREAT",
  B: "GOOD", 
  C: "OKAY",
  D: "POOR",
  E: "BAD"
} as const

export default function FigmaExactWidget({
  rating = "A",
  ratingLabel,
  vendor = "Polaris Peptides",
  productName = "Semaglutide",
  samplesCount = 6,
  lastTestDate = "19 Feb 2025",
  interactive = true
}: FigmaExactWidgetProps) {
  
  const finalLabel = ratingLabel || RATING_LABELS[rating]
  const ratingColor = RATING_COLORS[rating]

  const handleClick = () => {
    if (interactive && typeof window !== 'undefined') {
      window.open(`https://finnrick.com/vendor/${vendor}`, '_blank')
    }
  }

  return (
    <div className="w-full max-w-sm">
      {/* Header */}
    

      {/* Main Card */}
      <Card 
        className={`
          bg-gray-100 border-gray-200 rounded-[8px] p-4
          ${interactive ? 'cursor-pointer hover:bg-gray-50 transition-colors' : ''}
        `}
        onClick={handleClick}
      >
        <CardHeader className="p-0">
   
        <div className="flex items-center justify-between">
          <span className="text-sm font-bold leading-[130%] text-gray-900 tracking-[2%]">
            FINNRICK RATING™
          </span>
          <HelpCircle className="w-4 h-4 text-gray-400" />
        </div>
  
        </CardHeader>
        <CardContent className="p-4">
          <div className="flex items-start gap-3">
            {/* Rating Badge */}
            <div className="flex items-center">
              <div 
                className="w-16 h-8 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-sm"
                style={{ backgroundColor: ratingColor }}
              >
                <span className="mr-1">{rating}</span>
                <span className="text-sm font-medium">{finalLabel}</span>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-[20px] leading-[120%]">
                {vendor}
              </h3>
              <h4 className="font-semibold text-black text-[20px] leading-[120%]">
                {productName}
              </h4>
              
              <div className="space-y-1">
                <p className="text-sm text-black leading-[140%]">
                  Tested {samplesCount} Samples
                </p>
                <p className="text-sm text-gray-[#666666] font-normal">
                  Last test {lastTestDate}
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 