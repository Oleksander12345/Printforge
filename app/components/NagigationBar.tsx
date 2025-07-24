import { getAllCategories } from "../lib/categories"
import Link from "next/link"

export default function NavigationBar() {
    const categories = getAllCategories()
    return(
        <div className="w-50">
            <ul className="fixed top-1/2 ml-4 transform -translate-y-1/2">
                <Link href="/3d-models">All</Link>
               {categories.map((categori) => (
                <li className="uppercase text-gray-500  font-light mb-4 hover:text-orange-400 hover:translate-x-1 transition" key={categori.displayName}>
                    <Link href={`3d-models/categories/${categori.slug}`}>{categori.displayName}</Link>
                </li>
               ))} 
            </ul>
        </div>
    )
}