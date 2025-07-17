import RatingWidget from "./index"

interface PresetWidgetProps {
  rating: string
  ratingLabel: string
  vendor: string
  compound: string
  samplesCount: number
  lastTestDate: string
  variant?: "desktop" | "mobile"
  logoUrl?: string
  className?: string
}

// Desktop preset
export function DesktopRatingWidget(props: PresetWidgetProps) {
  const { rating, ratingLabel, vendor, compound, samplesCount, lastTestDate, logoUrl, className } = props

  return (
    <RatingWidget variant="desktop" className={className}>
      <RatingWidget.Header />
      <RatingWidget.Layout variant="desktop">
        <RatingWidget.Badge rating={rating} label={ratingLabel} variant="desktop" />
        <RatingWidget.Content
          vendor={vendor}
          compound={compound}
          samplesCount={samplesCount}
          lastTestDate={lastTestDate}
          variant="desktop"
        />
      </RatingWidget.Layout>
      <RatingWidget.Footer logoUrl={logoUrl} />
    </RatingWidget>
  )
}

// Mobile preset
export function MobileRatingWidget(props: PresetWidgetProps) {
  const { rating, ratingLabel, vendor, compound, samplesCount, lastTestDate, logoUrl, className } = props

  return (
    <RatingWidget variant="mobile" className={className}>
      <RatingWidget.Header />
      <RatingWidget.Layout variant="mobile">
        <RatingWidget.Badge rating={rating} label={ratingLabel} variant="mobile" />
        <RatingWidget.Content
          vendor={vendor}
          compound={compound}
          samplesCount={samplesCount}
          lastTestDate={lastTestDate}
          variant="mobile"
        />
      </RatingWidget.Layout>
      <RatingWidget.Footer logoUrl={logoUrl} />
    </RatingWidget>
  )
}

// Responsive preset that auto-adapts
export function ResponsiveRatingWidget(props: PresetWidgetProps) {
  return (
    <>
      {/* Desktop version */}
      <div className="hidden md:block">
        <DesktopRatingWidget {...props} variant="desktop" />
      </div>

      {/* Mobile version */}
      <div className="block md:hidden">
        <MobileRatingWidget {...props} variant="mobile" />
      </div>
    </>
  )
}
