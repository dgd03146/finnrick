"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink, Star } from "lucide-react"

type RatingGrade = "A" | "B" | "C" | "D" | "E"

interface OptimizedEmbedWidgetProps {
  rating: RatingGrade
  starRating: number
  totalReviews: number
  vendor: string
  productId: string
  logoUrl?: string
  size?: "compact" | "standard" | "mini"
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
  A: "EXCELLENT",
  B: "GOOD", 
  C: "OKAY",
  D: "POOR",
  E: "BAD"
} as const

export default function OptimizedEmbedWidget({
  rating = "A",
  starRating = 4.8,
  totalReviews = 127,
  vendor = "Polaris Peptides",
  productId = "sample-product",
  logoUrl,
  size = "standard",
  interactive = true
}: OptimizedEmbedWidgetProps) {
  const [isHovered, setIsHovered] = useState(false)
  
  const ratingColor = RATING_COLORS[rating]
  const ratingLabel = RATING_LABELS[rating]

  const handleClick = () => {
    if (interactive && typeof window !== 'undefined') {
      window.open(`https://finnrick.com/products/${productId}`, '_blank')
    }
  }

  const renderStars = () => {
    const stars = []
    const fullStars = Math.floor(starRating)
    const hasHalfStar = starRating % 1 !== 0

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(
          <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
        )
      } else if (i === fullStars && hasHalfStar) {
        stars.push(
          <div key={i} className="relative w-3 h-3">
            <Star className="absolute w-3 h-3 text-gray-300" />
            <div className="absolute overflow-hidden w-1.5">
              <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
            </div>
          </div>
        )
      } else {
        stars.push(
          <Star key={i} className="w-3 h-3 text-gray-300" />
        )
      }
    }
    return stars
  }

  if (size === "mini") {
    return (
      <div 
        className={`
          inline-flex items-center gap-2 px-3 py-2 bg-white rounded-lg shadow-sm border
          ${interactive ? 'cursor-pointer hover:shadow-md transition-shadow' : ''}
        `}
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div 
          className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white"
          style={{ backgroundColor: ratingColor }}
        >
          {rating}
        </div>
        <div className="flex items-center gap-1">
          {renderStars().slice(0, 5)}
        </div>
        <span className="text-xs text-gray-600">{starRating}</span>
        {interactive && (
          <ExternalLink className="w-3 h-3 text-gray-400" />
        )}
      </div>
    )
  }

  if (size === "compact") {
    return (
      <Card 
        className={`
          w-full max-w-xs bg-white shadow-sm border border-gray-200 rounded-xl
          ${interactive ? 'cursor-pointer hover:shadow-md transition-all duration-200' : ''}
          ${isHovered ? 'transform -translate-y-0.5' : ''}
        `}
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <CardContent className="p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div 
                className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white"
                style={{ backgroundColor: ratingColor }}
              >
                {rating}
              </div>
              <div>
                <div className="flex items-center gap-1 mb-0.5">
                  {renderStars()}
                </div>
                <span className="text-xs text-gray-600">{starRating} ({totalReviews} reviews)</span>
              </div>
            </div>
            {interactive && (
              <ExternalLink className="w-4 h-4 text-gray-400" />
            )}
          </div>
          
          <div className="text-sm font-medium text-gray-900 mb-2 truncate">
            {vendor}
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-500">Finnrick Verified</span>
            <img
              src={logoUrl || "/finnrick-logo.svg"}
              alt="Finnrick"
              className="h-3 opacity-60"
            />
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card 
      className={`
        w-full max-w-sm bg-white shadow-md border border-gray-200 rounded-xl
        ${interactive ? 'cursor-pointer hover:shadow-lg transition-all duration-300' : ''}
        ${isHovered ? 'transform -translate-y-1 shadow-lg' : ''}
      `}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent className="p-5">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-2">
            <div 
              className="w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold text-white shadow-sm"
              style={{ backgroundColor: ratingColor }}
            >
              {rating}
            </div>
            <div>
              <div className="text-xs font-semibold text-gray-700 uppercase tracking-wide mb-1">
                {ratingLabel}
              </div>
              <div className="flex items-center gap-1">
                {renderStars()}
                <span className="text-sm font-medium text-gray-700 ml-1">
                  {starRating}
                </span>
              </div>
            </div>
          </div>
          {interactive && (
            <ExternalLink className="w-5 h-5 text-gray-400 hover:text-gray-600 transition-colors" />
          )}
        </div>

        <div className="mb-4">
          <h3 className="font-bold text-gray-900 text-base leading-tight mb-1">
            {vendor}
          </h3>
          <p className="text-sm text-gray-600">
            Based on {totalReviews} verified reviews
          </p>
        </div>

        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
          <div className="flex items-center gap-2">
            <span className="text-xs font-medium text-gray-500">
              Verified by
            </span>
            <img
              src={logoUrl || "/finnrick-logo.svg"}
              alt="Finnrick"
              className="h-4 opacity-70 hover:opacity-100 transition-opacity"
            />
          </div>
          
          {interactive && (
            <button className="text-xs text-blue-600 hover:text-blue-800 font-medium transition-colors hover:underline">
              View Details
            </button>
          )}
        </div>
      </CardContent>
    </Card>
  )
} 