import { Card, CardContent } from "@/components/ui/card"

type RatingGrade = "A" | "B" | "C" | "D" | "E"
type WidgetVariant = "desktop" | "mobile"
type CompoundDisplayType = "short" | "long"

interface FinnrickRatingWidgetProps {
  variant?: WidgetVariant
  type?: CompoundDisplayType
  rating: RatingGrade
  ratingLabel?: string
  vendor: string
  compound: string
  samplesTested: number
  lastTestedDate: string
  logoUrl?: string
}

const RATING_COLORS: Record<RatingGrade, { bg: string; gradient: string; ring: string }> = {
  A: { 
    bg: "bg-[rgb(14,138,74)]", 
    gradient: "from-[rgb(14,138,74)] to-[rgb(10,120,65)]",
    ring: "ring-emerald-200"
  },
  B: { 
    bg: "bg-[rgb(115,200,44)]", 
    gradient: "from-[rgb(115,200,44)] to-[rgb(100,180,35)]",
    ring: "ring-lime-200"
  },
  C: { 
    bg: "bg-[rgb(255,184,0)]", 
    gradient: "from-[rgb(255,184,0)] to-[rgb(230,165,0)]",
    ring: "ring-yellow-200"
  },
  D: { 
    bg: "bg-[rgb(244,114,22)]", 
    gradient: "from-[rgb(244,114,22)] to-[rgb(220,100,15)]",
    ring: "ring-orange-200"
  },
  E: { 
    bg: "bg-[rgb(239,49,32)]", 
    gradient: "from-[rgb(239,49,32)] to-[rgb(215,40,25)]",
    ring: "ring-red-200"
  }
} as const

const RATING_LABELS: Record<RatingGrade, string> = {
  A: "EXCELLENT",
  B: "GOOD", 
  C: "OKAY",
  D: "POOR",
  E: "BAD"
} as const

const WIDGET_STYLES = {
  desktop: {
    maxWidth: "max-w-sm",
    layout: "items-start gap-3",
    textAlign: "text-left",
    minWidth: "min-w-0",
    badgeSize: "w-16 h-16",
    ratingText: "text-2xl",
    labelText: "text-xs"
  },
  mobile: {
    maxWidth: "max-w-xs", 
    layout: "flex-col items-center gap-2",
    textAlign: "text-center",
    minWidth: "",
    badgeSize: "w-14 h-14",
    ratingText: "text-xl",
    labelText: "text-xs"
  }
} as const

export default function FinnrickRatingWidget({
  variant = "desktop",
  type = "short",
  rating = "A",
  ratingLabel,
  vendor = "Polaris Peptides",
  compound = "Semaglutide", 
  samplesTested = 5,
  lastTestedDate = "18 Feb 2025",
  logoUrl,
}: FinnrickRatingWidgetProps) {
  const getRatingStyles = (grade: RatingGrade) => {
    return RATING_COLORS[grade] || RATING_COLORS.A
  }

  const styles = WIDGET_STYLES[variant]
  const ratingStyles = getRatingStyles(rating)
  const displayLabel = ratingLabel || RATING_LABELS[rating]
  const compoundTextSize = type === "long" ? "text-xs" : "text-sm"

  return (
    <Card className={`
      w-full ${styles.maxWidth} bg-white 
      border-0 shadow-md hover:shadow-lg 
      rounded-xl transition-all duration-300
      ring-1 ring-gray-100 hover:ring-2 hover:${ratingStyles.ring}
    `}>
      <CardContent className="p-4">
        <div className="mb-3">
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
            <span className="text-xs font-bold text-gray-600 uppercase tracking-wider">
              FINNRICK RATING™
            </span>
            <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"></div>
          </div>
        </div>

        <div className={`flex ${styles.layout}`}>
          <div className="flex-shrink-0 flex flex-col items-center">
            <div className={`
              ${styles.badgeSize} rounded-full 
              bg-gradient-to-br ${ratingStyles.gradient}
              flex items-center justify-center
              shadow-md ring-2 ring-white
              transform transition-transform duration-200 hover:scale-105
            `}>
              <span className={`${styles.ratingText} font-black text-white drop-shadow-sm`}>
                {rating}
              </span>
            </div>
            <div className="mt-2 px-2 py-1 bg-gray-900 rounded-full shadow-sm">
              <span className={`${styles.labelText} font-bold text-white uppercase tracking-wider`}>
                {displayLabel}
              </span>
            </div>
          </div>

          <div className={`flex-1 ${styles.textAlign} ${styles.minWidth}`}>
            <h3 className="font-black text-gray-900 text-base leading-tight mb-1 tracking-tight">
              {vendor}
            </h3>
            <p className={`font-semibold text-gray-700 leading-tight mb-3 ${compoundTextSize}`}>
              {compound}
            </p>
            <div className={`space-y-1 ${variant === "mobile" ? "text-center" : ""}`}>
              <div className="flex items-center gap-1.5 text-xs text-gray-500">
                <div className="w-1 h-1 rounded-full bg-green-400"></div>
                <span className="font-medium">
                  Tested {samplesTested} samples
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-gray-500">
                <div className="w-1 h-1 rounded-full bg-blue-400"></div>
                <span className="font-medium">
                  Last tested {lastTestedDate}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-4 pt-3 border-t border-gray-100">
          <div className="flex items-center gap-1.5 opacity-75 hover:opacity-100 transition-opacity duration-200">
            <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
              Verified by
            </span>
            <img
              src={logoUrl || "/finnrick-logo.svg"}
              alt="Finnrick"
              className="h-4 filter hover:brightness-110 transition-all duration-200"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
