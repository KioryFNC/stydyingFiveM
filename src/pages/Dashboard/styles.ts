import styled from "styled-components";


export const Root = styled.div`
  width: 100%;
  max-height: 100%;
  min-height: 100%;
`

export const Status = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
`

export const Content = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;
`

export const Members = styled.div`
  min-width: 60rem; 
  height: 48rem; /* por enquanto, o certo é o members ter o height 100% do content e nao ultrapassar a caixa */
  padding: 1.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.6rem;
  border-radius: 6px;
  overflow: auto;
  border: 1px solid ${( props ) => props.theme['border']};
  background: radial-gradient(79.03% 79.03% at 50% 20.97%, rgba(255, 255, 255, 0.07) 0%, rgba(153, 153, 153, 0.02) 100%);
`

export const Header = styled.div`
  display: flex;
  width: 100%;
  height: 3.8rem;
  gap: .6rem;

  > div {
    position: relative;
  }

  > div > svg {
    position: absolute;
    left: 1rem;
    top: 50%;
    transform: translateY(-50%);
  }

  > div > input {
    min-width: 43.9rem;
    height: 3.8rem;
    padding: 1.1rem 1.2rem .9rem 3rem;
    display: flex;
    align-items: flex-start;
    border-radius: 4px;
    border: 1px solid rgba(255, 255, 255, 0.06);
    background: linear-gradient(90deg, #1C1C1C 0%, #242424 100%);
    color: white;
    font-size: 1.4rem;
    font-weight: 500;

    &::placeholder {
      color: rgba(255, 255, 255, 0.35);
      left: 3rem;
    }
  }
  

  > button {
    gap: .6rem;
    height: 3.8rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'PuristaSemiBold', sans-serif;
    font-size: 1.4rem;
    gap: .4rem;
    border-radius: 4px;
    color: #FFF;
    border: 1px solid #8237EC;
    background: radial-gradient(138.56% 100% at 0% 51.25%, #6523C2 0%, #8237EC 59.77%, #6523C2 100%);

    > svg {
      width: 1.6rem;
      height: 1.6rem;
    }
  }
`

export const Table = styled.div`
  width: 100%;
  height: 100%;

  > table {
      width: 100%;
      border-collapse: separate; 
      border-spacing: 0 .8rem; 
    
    > thead {
        width: 100%;
      }
    
    > thead tr {
        width: 100%;
        height: 3rem;
      }
    
    > thead tr th {
        color: rgba(255, 255, 255, 0.60);
        font-size: 1.4rem;
        text-align: center;
        font-weight: 400;
        padding: .6rem .8rem;
        
        &:first-child {
          text-align: left;
        }
        
        &:last-child {
          text-align: right;
        }
      }
    
    > tbody {
        width: 100%;
      }
      
    > tbody tr {
        width: 100%;
        height: 3.8rem;
        background: linear-gradient(90deg, #1C1C1C 0%, #242424 100%);
        box-shadow: 0px 4px 4px 0px rgba(7, 7, 7, 0.25);
        color: white;
        font-size: 1.2rem;
        text-align: center;
        span {
          color: rgba(255, 255, 255, 0.40);
        }
      }
    > tbody tr td {
        border-radius: 6px;
        padding: .6rem .8rem;

        &:first-child {
          text-align: left;
        }
        &:last-child {
          text-align: right;
          display: flex;
          margin-top: .5rem;
          justify-content: flex-end;
          gap: 0.5rem;
        }
      }

    > tbody tr td svg {
        width: 2rem; 
        height: 2rem;
        padding: 0.3rem;
        border-radius: 4px;

        &:hover {
          
        }
      }
    
      > tbody tr td svg:first-child { /* UpArrow */
          border: 1px solid #43D027;
          background: radial-gradient(50% 50% at 50% 50%, rgba(67, 208, 39, 0.50) 0%, rgba(44, 188, 16, 0.50) 100%);
    }

    > tbody tr td svg:nth-child(2) { /* DownArrow */
        border: 1px solid #EEB600;
        background: radial-gradient(50% 50% at 50% 50%, #EEB600 0%, #886800 100%);
    }

    > tbody tr td svg:last-child { /* X */
        border: 1px solid #D44;
        background: radial-gradient(50% 50% at 50% 50%, #D44 0%, #772525 100%);
    }
      
  }
`

export const Activity = styled.div`
   flex: 1; 
   display: flex;
   flex-direction: column;
   gap: 1rem;
   
`