import styled from "styled-components";

export const FooterWrapper = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
`;
export const FooterContainer = styled.div`
    z-index: 999;
    display: flex;
    flex: 1;
    flex-direction: column;
    padding: 1rem;
    background-color: #3f414d;
    @media (min-width: ${({ theme }) => theme.BreakPoints.tablet}) {
        flex-direction: row;
    } ;
`;
export const SpecialDiscount = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-bottom: 1px solid #666;
    margin-bottom: 1rem;
    @media (min-width: ${({ theme }) => theme.BreakPoints.tablet}) {
        border-right: 1px solid #666;
        border-bottom: unset;
    } ;
`;
export const DiscountHeading = styled.div`
    font-size: 1rem;
    font-weight: 600;
    padding: 0.5rem;
    color: #fff;
`;
export const QuickLinks = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-bottom: 1px solid #666;
    margin-bottom: 2rem;
    @media (min-width: ${({ theme }) => theme.BreakPoints.tablet}) {
        border-right: 1px solid #666;
        border-bottom: unset;
    } ;
`;
export const QuickLinksHeading = styled.div`
    font-size: 1rem;
    font-weight: 600;
    color: #fff;
    padding: 1rem;
    text-shadow: 2px 5px 2px #333;
`;
export const ContactUs = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 1rem;
`;
export const ContactUsHeading = styled.div`
    font-size: 1rem;
    font-weight: 600;
    padding: 1rem;
    color: #fff;
`;
export const PhoneNo = styled.div`
    color: #fff;
    font-weight: 400;
    font-size: 1rem;
    padding: 1.3rem;
`;
export const ModalInputField = styled.div`
    display: flex;
    align-items: center;
    padding: 1rem;
    justify-content: space-evenly;
`;
export const ModalLabel = styled.div`
    padding-left: 1rem;
    font-size: 1rem;
    flex: 0.3;
    color: #fff;
    font-weight: 600;
    cursor: pointer;
`;
export const Input = styled.input`
    background-color: #fff;
    border-radius: 3px;
    flex: 1;
    align-self: flex-start;
    border: 1px solid #dcdcdc;
    box-shadow: inset 0 2px 2px 0 rgb(0 0 0 / 5%);
    color: #666;
    font-size: inherit;
    height: 2rem;
    outline: none;
`;

export const SocialIcons = styled.div`
    display: flex;
    padding: 1rem;
`;
export const CopyRight = styled.div`
    display: flex;
    justify-content: center;
    flex: 0.5;
    font-weight: 700;
    padding: 1rem;
    background-color: #3f414d;
    color: #fff;

    border-top: 1px solid #666;
`;
