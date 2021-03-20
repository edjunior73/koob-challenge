import { createStoreon } from 'storeon'
import { storeonDevtools } from 'storeon/devtools'
import { booksModule, BookEvents, BookState } from './book'

export interface AppState extends BookState {}

export interface AppEvents extends BookEvents {}

const store = createStoreon<AppState, AppEvents>(
	[booksModule, process.env.NODE_ENV !== 'production' && storeonDevtools].filter(Boolean)
)

declare module 'storeon/react' {
	export function useStoreon(
		...keys: (keyof AppState)[]
	): useStoreon.StoreData<AppState, AppEvents>
}

declare module 'storeon' {
	export type IStoreonModule<State = AppState, Events = AppEvents> = (
		store: StoreonStore<State, Events>
	) => void
}

export default store
