import { useRouter } from 'next/router'

import { Link } from '@/frame/components/Link'
import { ArrowRightIcon } from '@primer/octicons-react'
import { useMainContext } from '@/frame/components/context/MainContext'

import { useProductLandingContext } from '@/landings/components/ProductLandingContext'
import { GuideCard } from '@/landings/components/GuideCard'
import { useTranslation } from '@/languages/components/useTranslation'

export const GuideCards = () => {
  const router = useRouter()
  const { currentCategory } = useMainContext()
  const { featuredLinks, hasGuidesPage } = useProductLandingContext()
  const { t } = useTranslation('product_landing')

  const routePath = `/${router.locale}${router.asPath.split('?')[0]}` // remove query string

  if (!featuredLinks.guideCards) {
    return null
  }

  return (
    <div>
      <div className="d-lg-flex flex-items-stretch">
        <ul className="d-flex flex-wrap gutter">
          {(featuredLinks.guideCards || []).map((guide) => {
            return <GuideCard key={guide.href} guide={guide} />
          })}
        </ul>
      </div>

      {!currentCategory && hasGuidesPage && (
        <Link href={`${routePath}/guides`} className="btn btn-outline float-right">
          {t('explore_guides')} <ArrowRightIcon />
        </Link>
      )}
    </div>
  )
}
