import { cn } from "@/lib/utils"

/** 星级评分：用两层五星叠加裁剪出 0-5 分的视觉效果（含半星）。 */
export function StarRating({ value, size = 14, className }: {
  value: number
  size?: number
  className?: string
}) {
  const pct = Math.max(0, Math.min(100, (value / 5) * 100))
  return (
    <span
      className={cn("relative inline-block leading-none text-zinc-300", className)}
      style={{ fontSize: size }}
      aria-label={`评分 ${value}`}
      role="img"
    >
      ★★★★★
      <span
        className="absolute inset-0 overflow-hidden whitespace-nowrap text-amber-400"
        style={{ width: `${pct}%` }}
      >
        ★★★★★
      </span>
    </span>
  )
}
