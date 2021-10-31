import React from 'react'
import { FavoriteIconSVG } from './../components/Icons/FavoriteIconSVG/index'
import { WrenchSVG } from '../components/Icons/WrenchSVG'
import { CarSVG } from '../components/Icons/CarSVG'
import { BookSVG } from '../components/Icons/BookSVG'
import { JewelSVG } from '../components/Icons/JewelSVG'
import { OtherSVG } from '../components/Icons/OtherSVG'
import { HealthSVG } from '../components/Icons/HealthSVG'
import { SocialSVG } from '../components/Icons/SocialSVG'
import { TechSVG } from '../components/Icons/TechSVG'
import theme from '../styles/theme'

export const categoryIcons = {
  wrench: <WrenchSVG fill={theme.colors.red} size={34} />,
  favorite: <FavoriteIconSVG fill={theme.colors.purple} size={34} />,
  car: <CarSVG fill={theme.colors.yellow} size={34} />,
  book: <BookSVG fill={theme.colors.blue} size={34} />,
  beauty: <JewelSVG fill={theme.colors.primary} size={34} />,
  other: <OtherSVG fill={theme.colors.red} size={34} />,
  health: <HealthSVG fill={theme.colors.blue} size={34} />,
  social: <SocialSVG fill={theme.colors.purple} size={34} />,
  tech: <TechSVG fill={theme.colors.blue} size={34} />
}

export default [
  {
    id: 1,
    name: 'Estilo de vida',
    color: 'rgba(82, 113, 255, 0.25)',
    icon: <FavoriteIconSVG fill={theme.colors.purple} size={34} />
  },

  {
    id: 2,
    name: 'Mantenimiento',
    color: 'rgba(243, 75, 80, 0.25)',
    icon: <WrenchSVG fill={theme.colors.red} size={34} />
  },

  {
    id: 3,
    name: 'Transporte',
    color: 'rgba(255, 161, 12, 0.25)',
    icon: <CarSVG fill={theme.colors.yellow} size={34} />
  },

  {
    id: 4,
    name: 'Educación',
    color: 'rgba(5, 177, 251, 0.25)',
    icon: <BookSVG fill={theme.colors.blue} size={34} />
  }

]
