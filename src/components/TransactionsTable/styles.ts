import styled from "styled-components";

export const Container = styled.div`
  margin-top: 4rem;

  table {
    width: 100%;
    border-spacing: 0 0.5rem;

    th {
      font-weight: 400;
      color: var(--text-title);
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
    }

    td {
      padding: 2.5rem 2rem;
      border: 0;

      background: var(--white);
      color: var(--text-body);

      &:first-child {
        border-radius: 0.25rem 0 0 0.25rem;
        color: var(--text-color);
      }

      &:last-child {
        border-radius: 0 0.25rem 0.25rem 0;
      }

      &.deposit {
        color: var(--green);
      }

      &.withdraw {
        color: var(--red);
      }
    }
  }
`;
