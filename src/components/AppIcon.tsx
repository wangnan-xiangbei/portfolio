import { cn } from "@/lib/utils"

/**
 * 苹果 App Store 风格的圆角应用图标。
 * 有 iconImage 时显示真实图片；否则用 gradient + icon 字形占位。
 */
export function AppIcon({
  icon,
  iconImage,
  gradient,
  size = 64,
  className,
}: {
  icon?: string
  iconImage?: string
  gradient: string
  size?: number
  className?: string
}) {
  return (
    <div
      className={cn(
        "flex shrink-0 items-center justify-center overflow-hidden rounded-[22%] shadow-md",
        gradient,
        className,
      )}
      style={{ width: size, height: size }}
    >
      {iconImage ? (
        <img src={iconImage} alt="" className="h-full w-full object-cover" />
      ) : (
        <span
          className="select-none font-bold leading-none text-white"
          style={{ fontSize: size * 0.46 }}
        >
          {icon}
        </span>
      )}
    </div>
  )
}
