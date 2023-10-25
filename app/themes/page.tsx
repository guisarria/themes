

import "public/registry/themes.css"

import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header"
import { ThemeWrapper } from "@/components/theme-wrapper"

import { ThemesTabs } from "./tabs"
import { ThemeCustomizer } from "@/components/theme-customizer"
import { cn } from "@/lib/utils"

export default function ThemesPage() {
  return (
    <div className="container">
      <ThemeWrapper
        defaultTheme="zinc"
        className={cn("relative flex flex-col items-start md:flex-row md:items-center")}
      >
        <PageHeader className="relative pb-4 md:pb-8 lg:pb-12">
          <PageHeaderHeading>Customize seu tema.</PageHeaderHeading>
          <PageHeaderDescription>
            Color picker em breve.
          </PageHeaderDescription>
        </PageHeader>
        <div className="px-4 pb-8 md:ml-auto md:pb-0">
            <ThemeCustomizer />
        </div>
      </ThemeWrapper>
      <ThemesTabs />
    </div>
  )
}
