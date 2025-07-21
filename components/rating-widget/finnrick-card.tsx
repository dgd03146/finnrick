"use client"

import React, { createContext, useContext } from "react"
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card"
import { HelpCircle, ExternalLink, Star } from "lucide-react"

type RatingGrade = "A" | "B" | "C" | "D" | "E"
type Variant = "desktop" | "mobile" | "compact" | "embed"

interface FinnrickCardContextType {
  variant: Variant
  rating: RatingGrade
  interactive: boolean
  ratingColor: string
  ratingLabel: string
  horizontal: boolean
}

const FinnrickCardContext = createContext<FinnrickCardContextType | null>(null)

const useFinnrickCard = () => {
  const context = useContext(FinnrickCardContext)
  if (!context) {
    throw new Error("FinnrickCard components must be used within FinnrickCard")
  }
  return context
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

// Main Card Component
interface FinnrickCardProps {
  variant?: Variant
  rating: RatingGrade
  interactive?: boolean
  horizontal?: boolean
  children: React.ReactNode
  onClick?: () => void
  className?: string
}

export function FinnrickCard({ 
  variant = "desktop", 
  rating, 
  interactive = false, 
  horizontal = false,
  children, 
  onClick,
  className = ""
}: FinnrickCardProps) {
  const ratingColor = RATING_COLORS[rating]
  const ratingLabel = RATING_LABELS[rating]

  const contextValue: FinnrickCardContextType = {
    variant,
    rating,
    interactive,
    ratingColor,
    ratingLabel,
    horizontal
  }

  const getVariantClasses = () => {
    switch (variant) {
      case "desktop":
        return "  bg-gray-100 border-gray-200"
      case "mobile":
        return " bg-gray-100 border-gray-200"
      case "compact":
        return " bg-white border-gray-200 shadow-sm"
      case "embed":
        return " bg-white border-gray-200 shadow-md"
      default:
        return " bg-white border-gray-200"
    }
  }

  return (
    <FinnrickCardContext.Provider value={contextValue}>
      <Card 
        className={`
          ${getVariantClasses()}
          ${interactive ? 'cursor-pointer hover:shadow-md transition-all duration-200' : ''}
          ${className}
        `}
        onClick={onClick}
      >
        {children}
      </Card>
    </FinnrickCardContext.Provider>
  )
}

// Header Component
interface FinnrickCardHeaderProps {
  showHelp?: boolean
  className?: string
}

export function FinnrickCardHeader({ showHelp = true, className = "" }: FinnrickCardHeaderProps) {
  const { variant } = useFinnrickCard()
  
  if (variant === "compact") return null

  return (
    <CardHeader className={`p-4 pb-0 ${className}`}>
      <div className="flex items-center justify-between gap-4 border-b border-black pb-2">
        <span className="text-sm font-bold text-gray-900 tracking-wide">
          FINNRICK RATING™
        </span>
        {showHelp && <HelpCircle className="w-5 h-5 text-gray-400" />}
      </div>
   
    </CardHeader>
  )
}

// Badge Component
interface FinnrickCardBadgeProps {
  label?: string
  className?: string
}

export function FinnrickCardBadge({ label, className = "" }: FinnrickCardBadgeProps) {
  const { rating, ratingColor, ratingLabel, variant } = useFinnrickCard()
  
  const finalLabel = label || ratingLabel
  
  return (
    <div className={`flex items-center ${className}`}>
      {/* 원형 배경에 등급 */}
      <div 
        className="rounded-full flex items-center justify-center text-white font-semibold shadow-sm relative z-10 border-[1px] border-white w-16 h-16"
        style={{ backgroundColor: ratingColor }}
      >
        <span className="text-[40px]">{rating}</span>
      </div>
      
      {/* 라벨 배경 (원과 겹치도록) */}
      <div 
        className="rounded-full flex items-center text-white font-medium shadow-sm ml-[-48px] pl-14 pr-8 justify-center h-16"
        style={{ backgroundColor: ratingColor }}
      >
        <span className="text-base font-semibold">{finalLabel}</span>
      </div>
    </div>
  )
}

// Content Component
interface FinnrickCardContentProps {
  children: React.ReactNode
  className?: string
}

export function FinnrickCardContent({ children, className = "" }: FinnrickCardContentProps) {
  const { variant, horizontal } = useFinnrickCard()
  
  const getLayoutClasses = () => {
    switch (variant) {
      case "desktop":
        return "flex items-start gap-3"
      case "mobile":
        return horizontal ? "flex items-start gap-3" : "flex flex-col gap-3"
      case "compact":
        return "flex items-center gap-2"
      case "embed":
        return "flex items-start gap-3"
      default:
        return "flex items-start gap-3"
    }
  }

  return (
    <CardContent className={`p-4 ${className}`}>
      <div className={getLayoutClasses()}>
        {children}
      </div>
    </CardContent>
  )
}

// Title Component
interface FinnrickCardTitleProps {
  children: React.ReactNode
  className?: string
}

export function FinnrickCardTitle({ children, className = "" }: FinnrickCardTitleProps) {

  
  const getSizeClasses = () => {
   return "text-[20px] font-semibold"
  }

  return (
    <h3 className={`${getSizeClasses()} text-gray-900 leading-tight ${className}`}>
      {children}
    </h3>
  )
}

// Subtitle Component
interface FinnrickCardSubtitleProps {
  children: React.ReactNode
  className?: string
}

export function FinnrickCardSubtitle({ children, className = "" }: FinnrickCardSubtitleProps) {

  
  const getSizeClasses = () => {
    return "text-[20px] font-semibold"
  }

  return (
    <h4 className={`${getSizeClasses()} text-gray-800 leading-tight ${className}`}>
      {children}
    </h4>
  )
}

// Details Container
interface FinnrickCardDetailsProps {
  children: React.ReactNode
  className?: string
}

export function FinnrickCardDetails({ children, className = "" }: FinnrickCardDetailsProps) {
  const { variant } = useFinnrickCard()
  
  if (variant === "compact") return null

  return (
    <div className={`space-y-1 ${className}`}>
      {children}
    </div>
  )
}

// Sample Info Component
interface FinnrickCardSampleInfoProps {
  count: number
  className?: string
}

export function FinnrickCardSampleInfo({ count, className = "" }: FinnrickCardSampleInfoProps) {
  const { variant } = useFinnrickCard()
  
  if (variant === "compact") return null

  const getTextSize = () => {
    switch (variant) {
      case "desktop": return "text-sm font-normal leading-[140%]"
      case "mobile": return "text-xs"
      default: return "text-sm"
    }
  }

  return (
    <p className={`${getTextSize()} text-black ${className}`}>
      Tested {count} Samples
    </p>
  )
}

// Test Date Component
interface FinnrickCardTestDateProps {
  date: string
  className?: string
}

export function FinnrickCardTestDate({ date, className = "" }: FinnrickCardTestDateProps) {
  const { variant } = useFinnrickCard()
  
  if (variant === "compact") return null

  const getTextSize = () => {
    switch (variant) {
      case "desktop": return "text-sm leading-[140%] "
      case "mobile": return "text-xs"
      default: return "text-sm"
    }
  }

  return (
    <p className={`${getTextSize()} text-[#666666] ${className}`}>
      Last test {date}
    </p>
  )
}

// Star Rating Component
interface FinnrickCardStarRatingProps {
  rating: number
  showNumber?: boolean
  className?: string
}

export function FinnrickCardStarRating({ rating, showNumber = true, className = "" }: FinnrickCardStarRatingProps) {
  const { variant } = useFinnrickCard()
  
  const renderStars = () => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0

    const getStarSize = () => {
      switch (variant) {
        case "desktop": return "w-4 h-4"
        case "mobile": return "w-3 h-3"
        case "compact": return "w-3 h-3"
        case "embed": return "w-3 h-3"
        default: return "w-3 h-3"
      }
    }

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(
          <Star key={i} className={`${getStarSize()} fill-yellow-400 text-yellow-400`} />
        )
      } else if (i === fullStars && hasHalfStar) {
        stars.push(
          <div key={i} className={`relative ${getStarSize()}`}>
            <Star className={`absolute ${getStarSize()} text-gray-300`} />
            <div className="absolute overflow-hidden w-1.5">
              <Star className={`${getStarSize()} fill-yellow-400 text-yellow-400`} />
            </div>
          </div>
        )
      } else {
        stars.push(
          <Star key={i} className={`${getStarSize()} text-gray-300`} />
        )
      }
    }
    return stars
  }

  const getTextSize = () => {
    switch (variant) {
      case "desktop": return "text-sm"
      case "mobile": return "text-xs"
      case "compact": return "text-xs"
      default: return "text-sm"
    }
  }

  return (
    <div className={`flex items-center gap-1 ${className}`}>
      {renderStars()}
      {showNumber && (
        <span className={`${getTextSize()} font-medium text-gray-700 ml-1`}>
          {rating}
        </span>
      )}
    </div>
  )
}

// Review Count Component
interface FinnrickCardReviewCountProps {
  count: number
  className?: string
}

export function FinnrickCardReviewCount({ count, className = "" }: FinnrickCardReviewCountProps) {
  const { variant } = useFinnrickCard()
  
  const getTextSize = () => {
    switch (variant) {
      case "desktop": return "text-sm"
      case "mobile": return "text-xs"
      case "compact": return "text-xs"
      default: return "text-sm"
    }
  }

  return (
    <p className={`${getTextSize()} text-gray-600 ${className}`}>
      Based on {count} verified reviews
    </p>
  )
}

// Footer Component
interface FinnrickCardFooterProps {
  children: React.ReactNode
  className?: string
}

export function FinnrickCardFooter({ children, className = "" }: FinnrickCardFooterProps) {
  const { variant } = useFinnrickCard()
  
  if (variant === "compact") return null

  return (
    <CardFooter className={`p-4 pt-0 border-t border-gray-100 ${className}`}>
      <div className="flex items-center justify-between w-full">
        {children}
      </div>
    </CardFooter>
  )
}

// Logo Component
interface FinnrickCardLogoProps {
  src?: string
  className?: string
}

export function FinnrickCardLogo({ src = "/finnrick-logo.svg", className = "" }: FinnrickCardLogoProps) {
  const { variant } = useFinnrickCard()
  
  const getSizeClasses = () => {
    switch (variant) {
      case "desktop": return "h-5"
      case "mobile": return "h-4"
      case "embed": return "h-4"
      default: return "h-4"
    }
  }

  return (
    <div className="flex items-center gap-2">
      <span className="text-xs font-medium text-gray-500">
        Verified by
      </span>
      <img
        src={src}
        alt="Finnrick"
        className={`${getSizeClasses()} opacity-70 hover:opacity-100 transition-opacity ${className}`}
      />
    </div>
  )
}

// Vendor Link Component
interface FinnrickCardVendorLinkProps {
  onClick?: () => void
  className?: string
}

export function FinnrickCardVendorLink({ onClick, className = "" }: FinnrickCardVendorLinkProps) {
  const { interactive } = useFinnrickCard()
  
  if (!interactive) return null

  return (
    <button 
      onClick={onClick}
      className={`text-xs text-blue-600 hover:text-blue-800 font-medium transition-colors hover:underline ${className}`}
    >
      View Details
    </button>
  )
}



