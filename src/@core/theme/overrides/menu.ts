// ** Type Imports
import { OwnerStateThemeType } from './'
import { Skin } from 'src/@core/layouts/types'

// ** Util Import
import { hexToRGBA } from 'src/@core/utils/hex-to-rgba'

const Menu = (skin: Skin) => {
  const boxShadow = (theme: OwnerStateThemeType['theme']) => {
    if (skin === 'bordered') {
      return theme.shadows[0]
    } else if (theme.palette.mode === 'light') {
      return theme.shadows[8]
    } else return theme.shadows[9]
  }

  return {
    MuiMenu: {
      styleOverrides: {
        root: ({ theme }: OwnerStateThemeType) => ({
          '& .MuiMenu-paper': {
            boxShadow: boxShadow(theme),
            ...(skin === 'bordered' && { border: `1px solid ${theme.palette.divider}` })
          }
        })
      }
    },
    MuiMenuItem: {
      styleOverrides: {
        root: ({ theme }: OwnerStateThemeType) => ({
          margin: theme.spacing(0, 2, 1),
          padding: theme.spacing(1.75, 4),
          borderRadius: theme.shape.borderRadius,
          '&:last-child': {
            marginBottom: 0
          },
          '&:not(.Mui-focusVisible):hover': {
            color: theme.palette.primary.main,
            backgroundColor: hexToRGBA(theme.palette.primary.main, 0.08)
          },
          '&.Mui-selected': {
            color: `${theme.palette.common.white} !important`,
            backgroundColor: `${theme.palette.primary.main} !important`,
            '&.Mui-focusVisible': {
              backgroundColor: `${theme.palette.primary.dark} !important`
            }
          }
        })
      }
    }
  }
}

export default Menu
