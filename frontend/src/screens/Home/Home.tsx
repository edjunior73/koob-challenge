import { Book } from 'components/Book'
import React from 'react'

export interface HomeProps {}

const book = {
	name: 'Brizas Noturnas',
	author: 'Edmar Junior',
	editor: 'Greg Teixeira',
	category: 'Brizas',
	quantity: 1010
}

export const Home = (props: HomeProps) => (
	<div>
		<Book {...book} />
	</div>
)
