// ** Type Import
import { OwnerStateThemeType } from './'

// ** Util Import
import { hexToRGBA } from 'src/@core/utils/hex-to-rgba'

const Pagination = () => {
  return {
    MuiPaginationItem: {
      styleOverrides: {
        root: ({ theme }: OwnerStateThemeType) => ({
          '&:not(.MuiPaginationItem-outlined):not(.Mui-disabled)': {
            transition: theme.transitions.create(['color', 'background-color', 'box-shadow'], {
              duration: 250,
              easing: 'cubic-bezier(0.4, 0, 0.2, 1)'
            }),
            '&.Mui-selected': {
              boxShadow: theme.shadows[2]
            }
          }
        }),
        outlined: ({ theme }: OwnerStateThemeType) => ({
          borderColor: `rgba(${theme.palette.customColors.main}, 0.22)`
        }),
        outlinedPrimary: ({ theme }: OwnerStateThemeType) => ({
          '&.Mui-selected': {
            backgroundColor: hexToRGBA(theme.palette.primary.main, 0.16)
          }
        }),
        outlinedSecondary: ({ theme }: OwnerStateThemeType) => ({
          '&.Mui-selected': {
            backgroundColor: hexToRGBA(theme.palette.secondary.main, 0.16)
          }
        })
      }
    }
  }
}

export default Pagination
