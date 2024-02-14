import {defineTokens} from '@pandacss/dev';

export const colors = defineTokens.colors({
	white: {value: '#FFFFFF'},
	black: {value: '#000000'},
	brand: {
		25: {value: '#FCFAFF'},
		50: {value: '#F9F5FF'},
		100: {value: '#F4EBFF'},
		200: {value: '#E9D7FE'},
		300: {value: '#D6BBFB'},
		400: {value: '#B692F6'},
		500: {value: '#9E77ED'},
		600: {value: '#7F56D9'},
		700: {value: '#6941C6'},
		800: {value: '#53389E'},
		900: {value: '#42307D'},
		950: {value: '#2C1C5F'},
	},
	error: {
		25: {value: '#FFFBFA'},
		50: {value: '#FEF3F2'},
		100: {value: '#FEE4E2'},
		200: {value: '#FECDCA'},
		300: {value: '#FDA29B'},
		400: {value: '#F97066'},
		500: {value: '#F04438'},
		600: {value: '#D92D20'},
		700: {value: '#B42318'},
		800: {value: '#912018'},
		900: {value: '#7A271A'},
		950: {value: '#55160C'},
	},
	warning: {
		25: {value: '#FFFCF5'},
		50: {value: '#FFFAEB'},
		100: {value: '#FEF0C7'},
		200: {value: '#FEDF89'},
		300: {value: '#FEC84B'},
		400: {value: '#FDB022'},
		500: {value: '#F79009'},
		600: {value: '#DC6803'},
		700: {value: '#B54708'},
		800: {value: '#93370D'},
		900: {value: '#7A2E0E'},
		950: {value: '#4E1D09'},
	},
	success: {
		25: {value: '#F6FEF9'},
		50: {value: '#ECFDF3'},
		100: {value: '#DCFAE6'},
		200: {value: '#ABEFC6'},
		300: {value: '#75E0A7'},
		400: {value: '#47CD89'},
		500: {value: '#17B26A'},
		600: {value: '#079455'},
		700: {value: '#067647'},
		800: {value: '#085D3A'},
		900: {value: '#074D31'},
		950: {value: '#053321'},
	},
	gray: {
		light: {
			25: {value: '#FCFCFD'},
			50: {value: '#F9FAFB'},
			100: {value: '#F2F4F7'},
			200: {value: '#EAECF0'},
			300: {value: '#D0D5DD'},
			400: {value: '#98A2B3'},
			500: {value: '#667085'},
			600: {value: '#475467'},
			700: {value: '#344054'},
			800: {value: '#182230'},
			900: {value: '#101828'},
			950: {value: '#0C111D'},
		},
		dark: {
			25: {value: '#FAFAFA'},
			50: {value: '#F5F5F6'},
			100: {value: '#F0F1F1'},
			200: {value: '#ECECED'},
			300: {value: '#CECFD2'},
			400: {value: '#94969C'},
			500: {value: '#85888E'},
			600: {value: '#61646C'},
			700: {value: '#333741'},
			800: {value: '#1F242F'},
			900: {value: '#161B26'},
			950: {value: '#0C111D'},
		},
		blue: {
			25: {value: '#FCFCFD'},
			50: {value: '#F8F9FC'},
			100: {value: '#EAECF5'},
			200: {value: '#D5D9EB'},
			300: {value: '#B3B8DB'},
			400: {value: '#717BBC'},
			500: {value: '#4E5BA6'},
			600: {value: '#3E4784'},
			700: {value: '#363F72'},
			800: {value: '#293056'},
			900: {value: '#101323'},
			950: {value: '#0D0F1C'},
		},
		cool: {
			25: {value: '#FCFCFD'},
			50: {value: '#F9F9FB'},
			100: {value: '#EFF1F5'},
			200: {value: '#DCDFEA'},
			300: {value: '#B9C0D4'},
			400: {value: '#7D89B0'},
			500: {value: '#5D6B98'},
			600: {value: '#4A5578'},
			700: {value: '#404968'},
			800: {value: '#30374F'},
			900: {value: '#111322'},
			950: {value: '#0E101B'},
		},
		modern: {
			25: {value: '#FCFCFD'},
			50: {value: '#F8FAFC'},
			100: {value: '#EEF2F6'},
			200: {value: '#E3E8EF'},
			300: {value: '#CDD5DF'},
			400: {value: '#9AA4B2'},
			500: {value: '#697586'},
			600: {value: '#4B5565'},
			700: {value: '#364152'},
			800: {value: '#202939'},
			900: {value: '#121926'},
			950: {value: '#0D121C'},
		},
		neutral: {
			25: {value: '#FCFCFD'},
			50: {value: '#F9FAFB'},
			100: {value: '#F3F4F6'},
			200: {value: '#E5E7EB'},
			300: {value: '#D2D6DB'},
			400: {value: '#9DA4AE'},
			500: {value: '#6C737F'},
			600: {value: '#4D5761'},
			700: {value: '#384250'},
			800: {value: '#1F2A37'},
			900: {value: '#111927'},
			950: {value: '#0D121C'},
		},
		iron: {
			25: {value: '#FCFCFC'},
			50: {value: '#FAFAFA'},
			100: {value: '#F4F4F5'},
			200: {value: '#E4E4E7'},
			300: {value: '#D1D1D6'},
			400: {value: '#A0A0AB'},
			500: {value: '#70707B'},
			600: {value: '#51525C'},
			700: {value: '#3F3F46'},
			800: {value: '#26272B'},
			900: {value: '#1A1A1E'},
			950: {value: '#131316'},
		},
		true: {
			25: {value: '#FCFCFC'},
			50: {value: '#FAFAFA'},
			100: {value: '#F5F5F5'},
			200: {value: '#E5E5E5'},
			300: {value: '#D6D6D6'},
			400: {value: '#A3A3A3'},
			500: {value: '#737373'},
			600: {value: '#525252'},
			700: {value: '#424242'},
			800: {value: '#292929'},
			900: {value: '#141414'},
			950: {value: '#0F0F0F'},
		},
		warm: {
			25: {value: '#FDFDFC'},
			50: {value: '#FAFAF9'},
			100: {value: '#F5F5F4'},
			200: {value: '#E7E5E4'},
			300: {value: '#D7D3D0'},
			400: {value: '#A9A29D'},
			500: {value: '#79716B'},
			600: {value: '#57534E'},
			700: {value: '#44403C'},
			800: {value: '#292524'},
			900: {value: '#1C1917'},
			950: {value: '#171412'},
		},
	},
	moss: {
		25: {value: '#FAFDF7'},
		50: {value: '#F5FBEE'},
		100: {value: '#E6F4D7'},
		200: {value: '#CEEAB0'},
		300: {value: '#ACDC79'},
		400: {value: '#86CB3C'},
		500: {value: '#669F2A'},
		600: {value: '#4F7A21'},
		700: {value: '#3F621A'},
		800: {value: '#335015'},
		900: {value: '#2B4212'},
		950: {value: '#1A280B'},
	},
	green: {
		DEFAULT: {
			25: {value: '#F6FEF9'},
			50: {value: '#EDFCF2'},
			100: {value: '#D3F8DF'},
			200: {value: '#AAF0C4'},
			300: {value: '#73E2A3'},
			400: {value: '#3CCB7F'},
			500: {value: '#16B364'},
			600: {value: '#099250'},
			700: {value: '#087443'},
			800: {value: '#095C37'},
			900: {value: '#084C2E'},
			950: {value: '#052E1C'},
		},
		light: {
			25: {value: '#FAFEF5'},
			50: {value: '#F3FEE7'},
			100: {value: '#E4FBCC'},
			200: {value: '#D0F8AB'},
			300: {value: '#A6EF67'},
			400: {value: '#85E13A'},
			500: {value: '#66C61C'},
			600: {value: '#4CA30D'},
			700: {value: '#3B7C0F'},
			800: {value: '#326212'},
			900: {value: '#2B5314'},
			950: {value: '#15290A'},
		},
	},
	teal: {
		25: {value: '#F6FEFC'},
		50: {value: '#F0FDF9'},
		100: {value: '#CCFBEF'},
		200: {value: '#99F6E0'},
		300: {value: '#5FE9D0'},
		400: {value: '#2ED3B7'},
		500: {value: '#15B79E'},
		600: {value: '#0E9384'},
		700: {value: '#107569'},
		800: {value: '#125D56'},
		900: {value: '#134E48'},
		950: {value: '#0A2926'},
	},
	cyan: {
		25: {value: '#F5FEFF'},
		50: {value: '#ECFDFF'},
		100: {value: '#CFF9FE'},
		200: {value: '#A5F0FC'},
		300: {value: '#67E3F9'},
		400: {value: '#22CCEE'},
		500: {value: '#06AED4'},
		600: {value: '#088AB2'},
		700: {value: '#0E7090'},
		800: {value: '#155B75'},
		900: {value: '#164C63'},
		950: {value: '#0D2D3A'},
	},
	blue: {
		DEFAULT: {
			25: {value: '#F5FAFF'},
			50: {value: '#EFF8FF'},
			100: {value: '#D1E9FF'},
			200: {value: '#B2DDFF'},
			300: {value: '#84CAFF'},
			400: {value: '#53B1FD'},
			500: {value: '#2E90FA'},
			600: {value: '#1570EF'},
			700: {value: '#175CD3'},
			800: {value: '#1849A9'},
			900: {value: '#194185'},
			950: {value: '#102A56'},
		},
		light: {
			25: {value: '#F5FBFF'},
			50: {value: '#F0F9FF'},
			100: {value: '#E0F2FE'},
			200: {value: '#B9E6FE'},
			300: {value: '#7CD4FD'},
			400: {value: '#36BFFA'},
			500: {value: '#0BA5EC'},
			600: {value: '#0086C9'},
			700: {value: '#026AA2'},
			800: {value: '#065986'},
			900: {value: '#0B4A6F'},
			950: {value: '#062C41'},
		},
		dark: {
			25: {value: '#F5F8FF'},
			50: {value: '#EFF4FF'},
			100: {value: '#D1E0FF'},
			200: {value: '#B2CCFF'},
			300: {value: '#84ADFF'},
			400: {value: '#528BFF'},
			500: {value: '#2970FF'},
			600: {value: '#155EEF'},
			700: {value: '#004EEB'},
			800: {value: '#0040C1'},
			900: {value: '#00359E'},
			950: {value: '#002266'},
		},
	},
	indigo: {
		25: {value: '#F5F8FF'},
		50: {value: '#EEF4FF'},
		100: {value: '#E0EAFF'},
		200: {value: '#C7D7FE'},
		300: {value: '#A4BCFD'},
		400: {value: '#8098F9'},
		500: {value: '#6172F3'},
		600: {value: '#444CE7'},
		700: {value: '#3538CD'},
		800: {value: '#2D31A6'},
		900: {value: '#2D3282'},
		950: {value: '#1F235B'},
	},
	violet: {
		25: {value: '#FBFAFF'},
		50: {value: '#F5F3FF'},
		100: {value: '#ECE9FE'},
		200: {value: '#DDD6FE'},
		300: {value: '#C3B5FD'},
		400: {value: '#A48AFB'},
		500: {value: '#875BF7'},
		600: {value: '#7839EE'},
		700: {value: '#6927DA'},
		800: {value: '#5720B7'},
		900: {value: '#491C96'},
		950: {value: '#2E125E'},
	},
	purple: {
		25: {value: '#FAFAFF'},
		50: {value: '#F4F3FF'},
		100: {value: '#EBE9FE'},
		200: {value: '#D9D6FE'},
		300: {value: '#BDB4FE'},
		400: {value: '#9B8AFB'},
		500: {value: '#7A5AF8'},
		600: {value: '#6938EF'},
		700: {value: '#5925DC'},
		800: {value: '#4A1FB8'},
		900: {value: '#3E1C96'},
		950: {value: '#27115F'},
	},
	fuchsia: {
		25: {value: '#FEFAFF'},
		50: {value: '#FDF4FF'},
		100: {value: '#FBE8FF'},
		200: {value: '#F6D0FE'},
		300: {value: '#EEAAFD'},
		400: {value: '#E478FA'},
		500: {value: '#D444F1'},
		600: {value: '#BA24D5'},
		700: {value: '#9F1AB1'},
		800: {value: '#821890'},
		900: {value: '#6F1877'},
		950: {value: '#47104C'},
	},
	pink: {
		25: {value: '#FEF6FB'},
		50: {value: '#FDF2FA'},
		100: {value: '#FCE7F6'},
		200: {value: '#FCCEEE'},
		300: {value: '#FAA7E0'},
		400: {value: '#F670C7'},
		500: {value: '#EE46BC'},
		600: {value: '#DD2590'},
		700: {value: '#C11574'},
		800: {value: '#9E165F'},
		900: {value: '#851651'},
		950: {value: '#4E0D30'},
	},
	rose: {
		25: {value: '#FFF5F6'},
		50: {value: '#FFF1F3'},
		100: {value: '#FFE4E8'},
		200: {value: '#FECDD6'},
		300: {value: '#FEA3B4'},
		400: {value: '#FD6F8E'},
		500: {value: '#F63D68'},
		600: {value: '#E31B54'},
		700: {value: '#C01048'},
		800: {value: '#A11043'},
		900: {value: '#89123E'},
		950: {value: '#510B24'},
	},
	orange: {
		DEFAULT: {
			25: {value: '#FEFAF5'},
			50: {value: '#FEF6EE'},
			100: {value: '#FDEAD7'},
			200: {value: '#F9DBAF'},
			300: {value: '#F7B27A'},
			400: {value: '#F38744'},
			500: {value: '#EF6820'},
			600: {value: '#E04F16'},
			700: {value: '#B93815'},
			800: {value: '#932F19'},
			900: {value: '#772917'},
			950: {value: '#511C10'},
		},
		dark: {
			25: {value: '#FFF9F5'},
			50: {value: '#FFF4ED'},
			100: {value: '#FFE6D5'},
			200: {value: '#FFD6AE'},
			300: {value: '#FF9C66'},
			400: {value: '#FF692E'},
			500: {value: '#FF4405'},
			600: {value: '#E62E05'},
			700: {value: '#BC1B06'},
			800: {value: '#97180C'},
			900: {value: '#771A0D'},
			950: {value: '#57130A'},
		},
	},
	yellow: {
		25: {value: '#FEFDF0'},
		50: {value: '#FEFBE8'},
		100: {value: '#FEF7C3'},
		200: {value: '#FEEE95'},
		300: {value: '#FDE272'},
		400: {value: '#FAC515'},
		500: {value: '#EAAA08'},
		600: {value: '#CA8504'},
		700: {value: '#A15C07'},
		800: {value: '#854A0E'},
		900: {value: '#713B12'},
		950: {value: '#542C0D'},
	},
});
