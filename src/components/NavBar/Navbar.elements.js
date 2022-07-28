import styled from 'styled-components';

export const Container = styled.div`
	width: 100%
    height: 70px;
    background-color: #FFFFFF;
    border-bottom: 1px solid #CCCCCC;
`;

export const Wrapper = styled.div`
	width: 100%;
	max-width: 1300px;
	height: 100%;
	display: flex;
	margin: auto;
`;

export const LogoContainer = styled.div`
	margin-left: 0.5rem;
	display: flex;
	align-items: center;
`;

export const Menu = styled.ul`
	height: 100%;
	display: flex;
	justify-content: space-between;
	list-style: none;

	.textMenu {
		display: flex;
		margin-left: 900px;
	}

	.navMenu {
		display: none;
	}
	position: absolute;
	top: 70px;
	left: 0;
	width: 100%;
	height: 90vh;
	justify-content: flex-end;
	flex-direction: column;
	transition: 0.5s all ease;
`;

export const MenuItem = styled.li`
	height: 100%;
`;

export const MenuItemLink = styled.a`
	.link1 {
		font-style: normal;
		font-size: 14px;
		line-height: 17px;
		display: flex;
		justifiy-content: center;
		align-items: center;
		height: 100%;
		padding: 0.5rem 2.5rem;
		cursor: pointer;
		margin-left: 10px;
		margin-right: -30px;
		text-decoration: none;
		color: #373737;
		font-weight: bold;
	}
	.link2 {
		font-style: normal;
		font-size: 14px;
		line-height: 17px;
		display: flex;
		justifiy-content: center;
		align-items: center;
		height: 100%;
		padding: 0.5rem 2.5rem;
		cursor: pointer;
		margin-left: 10px;
		margin-right: -30px;
		text-decoration: none;
		color: #373737;
		font-weight: bold;
	}

	.link1:hover {
		color: #d0021b;
		text-decoration: underline 3px solid red;
	}
	.link1:focus {
		color: #d0021b;
		text-decoration: underline 3px solid red;
	}

	.link2:hover {
		color: #d0021b;
		text-decoration: underline 3px solid red;
	}
	.link2:focus {
		color: #d0021b;
		text-decoration: underline 3px solid red;
	}
`;

export const MobileIcon = styled.div`
	display: flex;
	align-items: center;
	cursor: pointer;

	svg {
		fill: black;
		margin-right: 0.5rem;
	}
`;
