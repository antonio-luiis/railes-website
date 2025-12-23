'use client'

import { usePathname } from 'next/navigation'
import { Navbar } from './Navbar'

interface ConditionalNavbarProps {
    siteSettings?: any
}

export function ConditionalNavbar({ siteSettings }: ConditionalNavbarProps) {
    const pathname = usePathname()

    // Don't show navbar on Studio routes
    if (pathname?.startsWith('/studio')) {
        return null
    }

    return <Navbar siteSettings={siteSettings} />
}
