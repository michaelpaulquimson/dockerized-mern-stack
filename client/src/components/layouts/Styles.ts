import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	overflow: hidden;
	margin: 8px;
`;

export const Header = styled.h1`
	font-weight: bold;
	font-size: 30px;
	margin: 8px;
	text-align: center;
`;

export const Button = styled.button`
	width: 200px;
	height: 50px;
	border-radius: 6px;
	cursor: pointer;
	background-color: #4CAF50;
	color: white;
`;