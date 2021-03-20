import { alpha, createMuiTheme, lighten } from '@material-ui/core/styles'
import '@material-ui/lab/themeAugmentation'
import { pxToRem } from './global'
import { theme } from './theme'

export const materialTheme = createMuiTheme({
	palette: {
		mode: 'light',
		primary: {
			main: theme.primary
		},
		secondary: {
			main: '#5f6368'
		},
		text: {
			primary: theme.text,
			secondary: theme.textSecondary
		}
	},
	typography: {
		h1: {
			fontSize: pxToRem(30),
			fontWeight: 600
		},
		h2: {
			fontSize: pxToRem(22),
			fontWeight: 400
		},
		h3: {
			fontSize: pxToRem(18)
		},
		h4: {
			fontSize: pxToRem(16)
		},
		h5: {
			fontSize: pxToRem(14)
		},
		h6: {
			fontSize: pxToRem(12),
			fontWeight: 400
		},
		button: {
			fontSize: pxToRem(20)
		},
		body1: {
			fontSize: pxToRem(15)
		},
		body2: {
			fontSize: pxToRem(13)
		},
		subtitle1: {
			margin: undefined
		}
	},
	components: {
		MuiAppBar: {
			defaultProps: {
				elevation: 0,
				color: 'transparent'
			},
			styleOverrides: {
				colorTransparent: {
					borderBottom: `1px solid ${theme.border}`
				}
			}
		},
		MuiIconButton: {
			styleOverrides: {
				root: {
					paddding: 8
				},
				sizeSmall: {
					padding: 4,
					fontSize: pxToRem(13)
				}
			}
		},
		MuiButton: {
			defaultProps: {
				disableElevation: true
			},
			styleOverrides: {
				root: {
					textTransform: 'initial',
					paddingLeft: 16,
					paddingRight: 16,
					fontSize: pxToRem(14)
					// lineHeight: 1.5
				},
				outlinedSecondary: {
					color: '#3c4043'
				},
				textSizeSmall: {
					padding: 2,
					paddingLeft: 4,
					paddingRight: 4,
					lineHeight: 'normal',
					minWidth: 'unset'
				},
				colorInherit: {
					'&$text': {
						color: theme.text
					}
				},
				contained: {
					'&$disabled': {
						backgroundColor: `${theme.disabled} !important`,
						color: theme.inputDisabledColor
					}
				},
				containedSecondary: {
					backgroundColor: theme.cancel,
					color: theme.text,
					'&:hover': {
						backgroundColor: lighten(theme.cancel, 0.4)
					}
				},
				containedSizeLarge: {
					padding: '10px 22px',
					fontSize: '1rem'
				}
			}
		},
		MuiTextField: {
			defaultProps: {
				fullWidth: true,
				variant: 'standard'
			}
		},
		MuiInput: {
			defaultProps: {
				disableUnderline: true
			},
			styleOverrides: {
				root: {
					borderRadius: 6,
					border: '1px solid',
					borderColor: theme.inputDisabledColor,
					fontSize: pxToRem(15),
					marginTop: '0 !important',
					'&.Mui-disabled': {
						border: 'none',
						backgroundColor: theme.disabled,
						color: theme.inputDisabledColor
					},
					'&.Mui-focused': {
						borderColor: theme.primary
					}
				},
				input: {
					padding: '12px'
				}
			}
		},
		MuiInputLabel: {
			defaultProps: {
				shrink: true
			},
			styleOverrides: {
				root: {
					fontSize: pxToRem(15),
					color: theme.text
				},
				shrink: {
					marginBottom: 10,
					position: 'initial',
					transform: 'unset',
					transformOrigin: 'unset'
				}
			}
		},
		MuiPaper: {
			styleOverrides: {
				elevation7: {
					boxShadow: theme.elevation7
				},
				elevation8: {
					boxShadow: theme.elevation8
				}
			}
		},
		MuiListItem: {
			styleOverrides: {
				dense: {
					paddingTop: 2,
					paddingBottom: 2
				}
			}
		},
		MuiListItemText: {
			styleOverrides: {
				root: {
					marginTop: 0,
					marginBottom: 0
				},
				multiline: {
					marginTop: 0,
					marginBottom: 0
				}
			}
		},
		MuiDialogTitle: {
			styleOverrides: {
				root: {
					padding: '24px 40px 8px'
				}
			}
		},
		MuiDialogContent: {
			styleOverrides: {
				root: {
					padding: '14px 40px 14px',
					overflowY: 'unset',
					'&:first-child': {
						paddingTop: null
					}
				}
			}
		},
		MuiDialogActions: {
			styleOverrides: {
				root: {
					padding: '14px 40px 24px'
				}
			}
		},
		MuiDialog: {
			defaultProps: {
				fullWidth: true
			},
			styleOverrides: {
				paperScrollBody: {
					'& .MuiDialogContent-root': {
						overflowY: 'hidden'
					}
				}
			}
		},
		MuiMenuItem: {
			styleOverrides: {
				root: {
					paddingTop: 15,
					paddingBottom: 15,
					fontSize: pxToRem(14),
					outline: 'none',
					'&$selected': {
						fontWeight: 400,
						backgroundColor: alpha(theme.primary, 0.1)
					}
				}
			}
		},
		MuiAutocomplete: {
			defaultProps: {
				autoHighlight: true,
				handleHomeEndKeys: true
			},
			styleOverrides: {
				endAdornment: {
					right: 10,
					top: undefined
				},
				inputRoot: {
					paddingLeft: 4,
					paddingTop: 4,
					'&.MuiInput-root': {
						paddingBottom: 4,
						'& .MuiInput-input': {
							padding: '7px 8px'
						},
						'& .MuiInput-input:first-child': {
							padding: '7px 8px'
						}
					},
					// TODO: remove when launch version alpha 26
					'& .MuiAutocomplete-clearIndicator': {
						padding: 2,
						marginRight: 2
					},
					'& .MuiAutocomplete-popupIndicator': {
						padding: 2,
						marginRight: -2
					}
				},
				tag: {
					margin: '3px !important'
				}
			}
		}
	}
})
