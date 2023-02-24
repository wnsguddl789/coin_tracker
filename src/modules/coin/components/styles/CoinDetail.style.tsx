import styled from '@emotion/styled'

export const Container = styled.div`
	padding: 0px 20px;
	max-width: 480px;
	margin: 0 auto;
`

export const Title = styled.h1`
	display: flex;
	justify-content: center;
	align-items: center;

	font-size: 24px;
	font-weight: 700;

	padding: 12px 8px;
`

export const CoinList = styled.ul`
	list-style: none;

	display: flex;
	flex-direction: column;

	gap: 12px;

	.coin-wrapper {
		border-radius: 8px;
		border: 1px solid black;

		box-shadow: 3px 3px 2px 1px rgba(0, 0, 255, 0.2);

		padding: 12px 8px;

		a {
		}
	}
`
