import Link from 'next/link'
import { DrupalNews } from '@/lib/types'
import ResponsiveImage from './ResponsiveImage'
import { ArrowRight } from 'lucide-react'

interface NewsCardProps {
  item: DrupalNews
}

export default function NewsCard({ item }: NewsCardProps) {
  return (
    <Link
      href={item.path || '#'}
      className="group bg-white border border-slate-200 rounded-lg p-6 hover:border-accent-300 transition-all duration-200"
    >
      {(item as any).image?.url && (
        <div className="relative h-40 rounded-md overflow-hidden mb-4 bg-slate-100">
          <ResponsiveImage
            src={(item as any).image.url}
            alt={(item as any).image.alt || item.title}
            fill
            className="object-cover"
            variations={(item as any).image.variations}
            targetWidth={400}
          />
        </div>
      )}

      <div>
        <h3 className="text-lg font-semibold text-primary-900 mb-2 group-hover:text-accent-700 transition-colors">
          {item.title}
        </h3>

        {(item as any).body?.processed && (
          <p className="text-slate-500 text-sm mb-4 line-clamp-2 leading-relaxed">
            {(item as any).body.processed.replace(/<[^>]*>/g, '').substring(0, 150)}
          </p>
        )}

        <div className="flex items-center text-accent-600 text-sm font-medium group-hover:gap-2 transition-all">
          Read more
          <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  )
}
