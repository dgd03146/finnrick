import type React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Award } from "lucide-react"
import { cn } from "@/lib/utils"

interface RatingWidgetProps {
  children: React.ReactNode
  variant?: "desktop" | "mobile"
  className?: string
}

function RatingWidget({ children, variant = "desktop", className }: RatingWidgetProps) {
  return (
    <Card
      className={cn(
        "w-full bg-white border-0 shadow-md hover:shadow-lg rounded-xl transition-all duration-300",
        "ring-1 ring-gray-100 hover:ring-2 hover:ring-blue-200",
        variant === "desktop" ? "max-w-sm" : "max-w-xs",
        className,
      )}
      role="article"
      aria-label="Finnrick rating widget"
    >
      <CardContent className="p-4">{children}</CardContent>
    </Card>
  )
}

interface HeaderProps {
  children?: React.ReactNode
}

function Header({ children }: HeaderProps) {
  return (
    <header className="mb-3">
      {children || (
        <div className="flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
          <span className="text-xs font-bold text-gray-600 uppercase tracking-wider">
            FINNRICK RATING™
          </span>
          <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"></div>
    </div>
      )}
    </header>
  )
}

const RATING_GRADIENTS: Record<string, string> = {
  A: "from-[rgb(14,138,74)] to-[rgb(10,120,65)]",
  B: "from-[rgb(115,200,44)] to-[rgb(100,180,35)]", 
  C: "from-[rgb(255,184,0)] to-[rgb(230,165,0)]",
  D: "from-[rgb(244,114,22)] to-[rgb(220,100,15)]",
  E: "from-[rgb(239,49,32)] to-[rgb(215,40,25)]"
} as const

interface BadgeProps {
  rating: string
  label: string
  variant?: "desktop" | "mobile"
}

function Badge({ rating, label, variant = "desktop" }: BadgeProps) {
  const gradient = RATING_GRADIENTS[rating] || RATING_GRADIENTS.A
  const badgeSize = variant === "desktop" ? "w-16 h-16" : "w-14 h-14"
  const textSize = variant === "desktop" ? "text-2xl" : "text-xl"

  return (
    <div 
      className={cn("flex-shrink-0 flex flex-col items-center", variant === "mobile" && "mb-3")}
      role="img"
      aria-label={`Rating ${rating} - ${label}`}
    >
      <div
        className={cn(
          badgeSize,
          "rounded-full bg-gradient-to-br",
          gradient,
          "flex items-center justify-center",
          "shadow-md ring-2 ring-white",
          "transform transition-transform duration-200 hover:scale-105"
        )}
        aria-hidden="true"
      >
        <span className={cn(textSize, "font-black text-white drop-shadow-sm")}>
          {rating}
        </span>
      </div>
      <div className="mt-2 px-2 py-1 bg-gray-900 rounded-full shadow-sm">
        <span className="text-xs font-bold text-white uppercase tracking-wider">
          {label}
        </span>
      </div>
    </div>
  )
}

interface ContentProps {
  vendor: string
  compound: string
  samplesCount: number
  lastTestDate: string
  variant?: "desktop" | "mobile"
}

function Content({ vendor, compound, samplesCount, lastTestDate, variant = "desktop" }: ContentProps) {
  return (
    <div className={cn("flex-1", variant === "desktop" ? "text-left min-w-0" : "text-center")}>
      <h3 className="font-black text-gray-900 text-base leading-tight mb-1 tracking-tight">
        {vendor}
      </h3>
      <p className="font-semibold text-gray-700 leading-tight mb-3 text-sm break-words">
        {compound}
      </p>
      <div className={cn("space-y-1", variant === "mobile" && "text-center")}>
        <div className="flex items-center gap-1.5 text-xs text-gray-500">
          <div className="w-1 h-1 rounded-full bg-green-400"></div>
          <span className="font-medium">
            <span className="sr-only">Number of samples tested:</span>
            Tested {samplesCount} samples
          </span>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-gray-500">
          <div className="w-1 h-1 rounded-full bg-blue-400"></div>
          <span className="font-medium">
            <span className="sr-only">Last test date:</span>
            Last tested {lastTestDate}
          </span>
        </div>
      </div>
    </div>
  )
}

interface FooterProps {
  logoUrl?: string
  showLogo?: boolean
}

function Footer({ logoUrl, showLogo = true }: FooterProps) {
  if (!showLogo) return null

  return (
    <footer className="flex justify-center mt-4 pt-3 border-t border-gray-100">
      <div className="flex items-center gap-1.5 opacity-75 hover:opacity-100 transition-opacity duration-200">
        <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
          Verified by
        </span>
      {logoUrl ? (
        <img
          src={logoUrl || "/placeholder.svg"}
            alt="Finnrick company logo"
            className="h-4 filter hover:brightness-110 transition-all duration-200"
        />
      ) : (
          <Award 
            className="w-4 h-4 text-gray-400 hover:text-gray-600 transition-colors duration-200" 
            aria-label="Award icon representing Finnrick certification"
          />
      )}
    </div>
    </footer>
  )
}

interface LayoutProps {
  children: React.ReactNode
  variant?: "desktop" | "mobile"
}

function Layout({ children, variant = "desktop" }: LayoutProps) {
  return (
    <div className={cn("flex", variant === "desktop" ? "items-start gap-3" : "flex-col items-center gap-0")}>
      {children}
    </div>
  )
}

RatingWidget.Header = Header
RatingWidget.Badge = Badge
RatingWidget.Content = Content
RatingWidget.Footer = Footer
RatingWidget.Layout = Layout

export default RatingWidget
