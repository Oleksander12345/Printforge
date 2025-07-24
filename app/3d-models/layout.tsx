// import NavLink from "@/app/components/NavLink"
import CategoryNav from "../components/CategoryNav"
import type { ReactNode } from "react"
import { getAllCategories } from "@/app/lib/categories"
import type { Category } from "@/app/types"

export default function ModelsLayout({ children }: { children: ReactNode }) {
  const categories: Category[] = getAllCategories()
  console.log(categories)
  return (
    <div className="relative flex flex-col min-h-screen md:flex-row">
      {/* Responsive Navigation */}
      <CategoryNav />
      {/* Main Content Area */}
      <main className="flex-1 p-4 md:ml-64">{children}</main>
    </div>
  )
}