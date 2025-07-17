import RatingWidget from "./index"


export function CustomRatingWidget() {
  return (
    <RatingWidget variant="desktop" className="border-2 border-emerald-200">
 
      <RatingWidget.Header>
        <div className="flex items-center gap-2">
          <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">FINNRICK RATING™</span>
          <span className="text-xs bg-emerald-100 text-emerald-800 px-2 py-1 rounded-full">VERIFIED</span>
        </div>
      </RatingWidget.Header>

      <RatingWidget.Layout variant="desktop">
        <RatingWidget.Badge rating="A" label="EXCELLENT" />
        <RatingWidget.Content
          vendor="Premium Research Labs Inc."
          compound="Advanced Peptide Complex with Extended Release Formula"
          samplesCount={15}
          lastTestDate="20 Feb 2025"
        />
      </RatingWidget.Layout>


      <RatingWidget.Footer logoUrl="/finnrick-logo.svg" />
    </RatingWidget>
  )
}


export function MinimalRatingWidget() {
  return (
    <RatingWidget variant="mobile">
      <RatingWidget.Header />
      <RatingWidget.Layout variant="mobile">
        <RatingWidget.Badge rating="B" label="GOOD" />
        <RatingWidget.Content
          vendor="Quick Labs"
          compound="Basic Formula"
          samplesCount={3}
          lastTestDate="15 Feb 2025"
          variant="mobile"
        />
      </RatingWidget.Layout>
      <RatingWidget.Footer showLogo={false} />
    </RatingWidget>
  )
}
