import RatingWidget from "./components/rating-widget"
import { DesktopRatingWidget, MobileRatingWidget, ResponsiveRatingWidget } from "./components/rating-widget/presets"
import { CustomRatingWidget, MinimalRatingWidget } from "./components/rating-widget/custom-examples"
import FigmaInspiredWidget from "./components/rating-widget/figma-inspired-widget"

import { 
  FinnrickCard, 
  FinnrickCardHeader, 
  FinnrickCardContent, 
  FinnrickCardBadge, 
  FinnrickCardTitle, 
  FinnrickCardSubtitle, 
  FinnrickCardDetails, 
  FinnrickCardSampleInfo, 
  FinnrickCardTestDate 
} from "./components/rating-widget/finnrick-card"

import OptimizedEmbedWidget from "./components/rating-widget/optimized-embed-widget"

export default function WidgetShowcase() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-gray-900">Finnrick Rating™ Widget System</h1>
          <p className="text-gray-600">Optimized widget variants for third-party site embedding</p>
        </div>
<h1 className="text-[32px] font-bold text-gray-900">
Finnrick - Rating Card System - On-Site
</h1>
<p className="text-[#2663EC] font-semibold">Desktop</p>
<p className="text-[#2663EC] font-light text-sm">Product Rating</p>

{/* Desktop - Product Rating Version */}
<FinnrickCard variant="desktop" rating="A" interactive className="max-w-[370px]">
  <FinnrickCardHeader />
  <FinnrickCardContent>
    <FinnrickCardBadge />
    <div className="flex-1 flex flex-col gap-2">
      <FinnrickCardTitle>Polaris Peptides</FinnrickCardTitle>
      <FinnrickCardSubtitle>Semaglutide</FinnrickCardSubtitle>
      <FinnrickCardDetails>
        <FinnrickCardSampleInfo count={6} />
        <FinnrickCardTestDate date="19 Feb 2025" />
      </FinnrickCardDetails>
    </div>
  </FinnrickCardContent>
</FinnrickCard>

<p className="text-[#2663EC] font-light text-sm mt-8">Long Vendor/Product Name</p>

{/* Desktop - Long Vendor/Product Name Version */}
<FinnrickCard variant="desktop" rating="A" interactive className="max-w-[370px]">
  <FinnrickCardHeader />
  <FinnrickCardContent>
    <FinnrickCardBadge />
    <div className="flex-1 flex flex-col gap-2">
      <FinnrickCardTitle>Shanghai Innovy Chemical New Materials</FinnrickCardTitle>
      <FinnrickCardSubtitle>Tesamorelin, CJC-1295, Ipamorelin</FinnrickCardSubtitle>
      <FinnrickCardDetails>
        <FinnrickCardSampleInfo count={6} />
        <FinnrickCardTestDate date="19 Feb 2025" />
      </FinnrickCardDetails>
    </div>
  </FinnrickCardContent>
</FinnrickCard>

<p className="text-[#2663EC] font-semibold mt-12">Mobile</p>

{/* Mobile - Product Rating Version */}
<FinnrickCard variant="mobile" rating="A" interactive className="max-w-[370px]" horizontal>
  <FinnrickCardHeader />
  <FinnrickCardContent>
    <FinnrickCardBadge />
    <div className="flex-1 flex flex-col gap-2">
      <FinnrickCardTitle>Polaris Peptides</FinnrickCardTitle>
      <FinnrickCardSubtitle>Semaglutide</FinnrickCardSubtitle>
      <FinnrickCardDetails>
        <FinnrickCardSampleInfo count={6} />
        <FinnrickCardTestDate date="19 Feb 2025" />
      </FinnrickCardDetails>
    </div>
  </FinnrickCardContent>
</FinnrickCard>

<p className="text-[#2663EC] font-light text-sm mt-8">Long Vendor/Product Name</p>

{/* Mobile - Long Vendor/Product Name Version */}
<FinnrickCard variant="mobile" rating="A" interactive horizontal className="max-w-[370px]">
  <FinnrickCardHeader />
  <FinnrickCardContent>
    <FinnrickCardBadge />
    <div className="flex-1 flex flex-col gap-2">
      <FinnrickCardTitle>Shanghai Innovy Chemical New Materials</FinnrickCardTitle>
      <FinnrickCardSubtitle>Tesamorelin, CJC-1295, Ipamorelin</FinnrickCardSubtitle>
      <FinnrickCardDetails>
        <FinnrickCardSampleInfo count={6} />
        <FinnrickCardTestDate date="19 Feb 2025" />
      </FinnrickCardDetails>
    </div>
  </FinnrickCardContent>
</FinnrickCard>

<p className="text-[#2663EC] font-light text-sm mt-8">Long Vendor/Product Name</p>
<FinnrickCard variant="mobile" rating="A" interactive className="max-w-[193px]">
  <FinnrickCardHeader />
  <FinnrickCardContent>
    <FinnrickCardBadge />
    <div className="flex-1 flex flex-col gap-2">
      <FinnrickCardTitle>Shanghai Innovy Chemical New Materials</FinnrickCardTitle>
      <FinnrickCardSubtitle>Tesamorelin, CJC-1295, Ipamorelin</FinnrickCardSubtitle>
      <FinnrickCardDetails>
        <FinnrickCardSampleInfo count={6} />
        <FinnrickCardTestDate date="19 Feb 2025" />
      </FinnrickCardDetails>
    </div>
  </FinnrickCardContent>
</FinnrickCard>


        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-900">Optimized Third-Party Widgets</h2>
          <p className="text-gray-600">Compact, efficient widgets designed specifically for embedding on vendor sites</p>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-800">Mini Widget (Inline)</h3>
              <div className="bg-white p-4 rounded-lg border flex justify-center">
                <OptimizedEmbedWidget
                  rating="A"
                  starRating={4.8}
                  totalReviews={127}
                  vendor="Polaris Peptides"
                  productId="polaris-sema"
                  size="mini"
                  logoUrl="/finnrick-logo.svg"
                />
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-800">Compact Widget</h3>
              <OptimizedEmbedWidget
                rating="A"
                starRating={4.8}
                totalReviews={127}
                vendor="Polaris Peptides"
                productId="polaris-sema"
                size="compact"
                logoUrl="/finnrick-logo.svg"
              />
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-800">Standard Widget</h3>
              <OptimizedEmbedWidget
                rating="B"
                starRating={4.2}
                totalReviews={89}
                vendor="Premium Labs"
                productId="premium-formula"
                size="standard"
                logoUrl="/finnrick-logo.svg"
              />
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-900">Size Comparison</h2>
          <p className="text-gray-600">Different widget sizes for various layout constraints</p>
          
          <div className="bg-white p-6 rounded-lg border">
            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-2">Mini (Perfect for product lists)</h4>
                <div className="flex flex-wrap gap-2">
                  <OptimizedEmbedWidget rating="A" starRating={4.8} totalReviews={127} vendor="Vendor A" productId="prod-a" size="mini" />
                  <OptimizedEmbedWidget rating="B" starRating={4.2} totalReviews={89} vendor="Vendor B" productId="prod-b" size="mini" />
                  <OptimizedEmbedWidget rating="C" starRating={3.7} totalReviews={45} vendor="Vendor C" productId="prod-c" size="mini" />
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-2">Compact (Sidebar placement)</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <OptimizedEmbedWidget rating="A" starRating={4.8} totalReviews={127} vendor="Polaris Peptides" productId="prod-a" size="compact" />
                  <OptimizedEmbedWidget rating="B" starRating={4.2} totalReviews={89} vendor="Premium Research" productId="prod-b" size="compact" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-900">Star Rating System</h2>
          <p className="text-gray-600">5-point star rating with half-star precision</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <OptimizedEmbedWidget rating="A" starRating={5.0} totalReviews={203} vendor="Excellent Vendor" productId="perfect" size="compact" />
            <OptimizedEmbedWidget rating="A" starRating={4.7} totalReviews={156} vendor="Great Vendor" productId="great" size="compact" />
            <OptimizedEmbedWidget rating="B" starRating={4.2} totalReviews={98} vendor="Good Vendor" productId="good" size="compact" />
            <OptimizedEmbedWidget rating="C" starRating={3.8} totalReviews={67} vendor="Okay Vendor" productId="okay" size="compact" />
            <OptimizedEmbedWidget rating="D" starRating={2.9} totalReviews={34} vendor="Poor Vendor" productId="poor" size="compact" />
            <OptimizedEmbedWidget rating="E" starRating={2.1} totalReviews={12} vendor="Bad Vendor" productId="bad" size="compact" />
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-900">Grade System (A-E)</h2>
          <p className="text-gray-600">Complete rating system with accurate brand colors</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="text-center space-y-2">
              <h4 className="text-sm font-medium text-gray-700">A Grade - EXCELLENT</h4>
              <FigmaInspiredWidget
                rating="A"
                vendor="Example Vendor"
                compound="Product A"
                               samplesCount={12}
               lastTestedDate="18 Feb 2025"
               variant="mobile"
              />
            </div>

            <div className="text-center space-y-2">
              <h4 className="text-sm font-medium text-gray-700">B Grade - GOOD</h4>
              <FigmaInspiredWidget
                rating="B"
                vendor="Example Vendor"
                compound="Product B"
                samplesCount={8}
                lastTestedDate="15 Feb 2025"
                variant="mobile"
              />
            </div>

            <div className="text-center space-y-2">
              <h4 className="text-sm font-medium text-gray-700">C Grade - OKAY</h4>
              <FigmaInspiredWidget
                rating="C"
                vendor="Example Vendor"
                compound="Product C"
                samplesCount={6}
                lastTestedDate="12 Feb 2025"
                variant="mobile"
              />
            </div>

            <div className="text-center space-y-2">
              <h4 className="text-sm font-medium text-gray-700">D Grade - POOR</h4>
              <FigmaInspiredWidget
                rating="D"
                vendor="Example Vendor"
                compound="Product D"
                samplesCount={4}
                lastTestedDate="10 Feb 2025"
                variant="mobile"
              />
            </div>

            <div className="text-center space-y-2">
              <h4 className="text-sm font-medium text-gray-700">E Grade - BAD</h4>
              <FigmaInspiredWidget
                rating="E"
                vendor="Example Vendor"
                compound="Product E"
                samplesCount={2}
                lastTestedDate="08 Feb 2025"
                variant="mobile"
              />
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-900">Responsive Design</h2>
          <div className="flex justify-center">
                         <ResponsiveRatingWidget
               rating="A"
               ratingLabel="GOOD"
               vendor="Polaris Peptides"
               compound="Semaglutide"
               samplesCount={5}
               lastTestDate="18 Feb 2025"
               logoUrl="/finnrick-logo.svg"
             />
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-900">Compound Component Pattern</h2>
          <p className="text-gray-600 mb-6">Flexible composition using compound component API</p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-800">Manual Composition</h3>
              <div className="bg-white p-4 rounded-lg border">
                <RatingWidget variant="desktop">
                  <RatingWidget.Header />
                  <RatingWidget.Layout variant="desktop">
                    <RatingWidget.Badge rating="A" label="EXCELLENT" />
                    <RatingWidget.Content
                      vendor="Polaris Peptides"
                      compound="Semaglutide"
                      samplesCount={5}
                      lastTestDate="18 Feb 2025"
                    />
                  </RatingWidget.Layout>
                  <RatingWidget.Footer logoUrl="/finnrick-logo.svg" />
                </RatingWidget>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-800">Custom Composition</h3>
              <div className="bg-white p-4 rounded-lg border">
                <CustomRatingWidget />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-xl border border-gray-200 p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Integration Examples</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">Optimized Widget (Recommended)</h3>
              <div className="bg-gray-100 rounded-lg p-4 text-sm font-mono text-gray-700">
                {`import { OptimizedEmbedWidget } from '@finnrick/widgets'

<OptimizedEmbedWidget
  rating="A"
  starRating={4.8}
  totalReviews={127}
  vendor="Polaris Peptides"
  productId="product-id"
  size="compact"
  interactive={true}
/>`}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">Figma-Based Widget</h3>
              <div className="bg-gray-100 rounded-lg p-4 text-sm font-mono text-gray-700">
                {`import { FigmaInspiredWidget } from '@finnrick/widgets'

<FigmaInspiredWidget
  rating="A"
  vendor="Polaris Peptides"
  compound="Semaglutide"
  samplesCount={6}
  lastTestedDate="19 Feb 2025"
  variant="desktop"
/>`}
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 bg-blue-50 rounded-lg">
            <h3 className="text-lg font-semibold text-blue-900 mb-2">WooCommerce Integration</h3>
            <p className="text-blue-800 text-sm mb-4">
              Perfect sizes for e-commerce product pages: Mini for product grids, Compact for sidebars, Standard for detailed views.
            </p>
            <div className="bg-white p-3 rounded border">
              <code className="text-xs text-gray-600">
                {`<!-- Add to product page template -->
<div class="finnrick-rating-container">
  <script src="https://cdn.finnrick.com/widget.js"></script>
  <div data-finnrick-widget="compact" data-product-id="<?php echo $product_id; ?>"></div>
</div>`}
              </code>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
