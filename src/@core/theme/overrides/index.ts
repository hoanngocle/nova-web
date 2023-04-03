// ** MUI Imports
import { Theme } from '@mui/material/styles'
import { ComponentsPropsList } from '@mui/material'

// ** Type Import
import { Settings } from 'src/@core/context/settingsContext'

export type OwnerStateThemeType = {
  theme: Theme
  ownerState: ComponentsPropsList[keyof ComponentsPropsList] & Record<string, unknown>
}

// ** Overrides Imports
import MuiCard from './card'
import MuiChip from './chip'
import MuiLink from './link'
import MuiList from './list'
import MuiMenu from './menu'
import MuiTabs from './tabs'
import MuiInput from './input'
import MuiPaper from './paper'
import MuiTable from './table'
import MuiRadio from './radio'
import MuiAlerts from './alerts'
import MuiButton from './button'
import MuiDialog from './dialog'
import MuiRating from './rating'
import MuiSelect from './select'
import MuiSlider from './slider'
import MuiAvatar from './avatars'
import MuiDivider from './divider'
import MuiPopover from './popover'
import MuiTooltip from './tooltip'
import MuiCheckbox from './checkbox'
import MuiBackdrop from './backdrop'
import MuiDataGrid from './dataGrid'
import MuiProgress from './progress'
import MuiSnackbar from './snackbar'
import MuiSwitches from './switches'
import MuiTimeline from './timeline'
import MuiAccordion from './accordion'
import MuiPagination from './pagination'
import MuiTypography from './typography'
import MuiBreadcrumb from './breadcrumbs'
import MuiAutocomplete from './autocomplete'
import MuiToggleButton from './toggleButton'

const Overrides = (settings: Settings) => {
  const { skin } = settings

  const button = MuiButton()
  const chip = MuiChip()
  const list = MuiList()
  const tabs = MuiTabs()
  const radio = MuiRadio()
  const input = MuiInput()
  const tables = MuiTable()
  const alerts = MuiAlerts()
  const rating = MuiRating()
  const slider = MuiSlider()
  const avatars = MuiAvatar()
  const divider = MuiDivider()
  const menu = MuiMenu(skin)
  const tooltip = MuiTooltip()
  const cards = MuiCard(skin)
  const checkbox = MuiCheckbox()
  const backdrop = MuiBackdrop()
  const dataGrid = MuiDataGrid()
  const progress = MuiProgress()
  const switches = MuiSwitches()
  const timeline = MuiTimeline()
  const accordion = MuiAccordion()
  const dialog = MuiDialog(skin)
  const pagination = MuiPagination()
  const popover = MuiPopover(skin)
  const breadcrumb = MuiBreadcrumb()
  const snackbar = MuiSnackbar(skin)
  const autocomplete = MuiAutocomplete(skin)

  return Object.assign(
    chip,
    list,
    menu,
    tabs,
    cards,
    radio,
    input,
    alerts,
    button,
    dialog,
    rating,
    slider,
    tables,
    avatars,
    divider,
    MuiLink,
    popover,
    tooltip,
    checkbox,
    backdrop,
    dataGrid,
    MuiPaper,
    progress,
    snackbar,
    switches,
    timeline,
    accordion,
    MuiSelect,
    breadcrumb,
    pagination,
    autocomplete,
    MuiTypography,
    MuiToggleButton
  )
}

export default Overrides
