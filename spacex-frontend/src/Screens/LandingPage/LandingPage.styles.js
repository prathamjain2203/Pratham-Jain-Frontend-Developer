import { styled } from "styled-components";

export const StyledLandingPage = styled.div`
  .pagination {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
    align-items: center;
    color: black;
    margin: 20px 0;
    .pagination-btn {
      border: 1px solid black;
      padding: 5px 10px;
      cursor: pointer;
    }
  }
  .main-header {
    min-height: 100vh;
    background: url("https://www.mtu.edu/news/2019/06/images/oculus-launch-banner-photo-nasa-banner800.jpg")
      no-repeat center;
    background-size: cover;
    .header-content {
      margin-left: 60px;
      margin-top: 40vh;
      text-align: left;
      color: #ffff;
      .desc {
        font-size: 24px;
      }
      .title {
        font-weight: bold;
        font-size: 48px;
        margin: 0;
      }
      .watch-btn {
        border: 2px solid #ffff;
        outline: none;
        background: transparent;
        font-weight: bold;
        color: #ffff;
        cursor: pointer;

        padding: 20px 60px;
        margin-top: 40px;
      }
    }
  }
  .capsules-section {
    width: 80%;
    margin: 30px auto;
    color: black;
    .capsules-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      margin: auto;
      margin-top: 20px;
      align-items: center;
      justify-content: space-between;
      gap: 20px;
    }
    @media (max-width: 900px) {
      .capsules-section {
        width: 90%;
      }
      .capsules-grid {
        grid-template-columns: repeat(3, 1fr);
      }
    }

    .search-form {
      .form-title {
        font-size: 32px;
        font-weight: bold;
        margin-bottom: 20px;
      }
      .form-layout {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 40px;
        .form-field {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          align-items: center;
          .form-label {
            font-size: 20px;
            color: grey;
          }
          select {
            padding: 10px 20px;
            border-radius: 10px;
          }
          input {
            padding: 10px 20px;
            border-radius: 10px;
            outline: none;
          }
        }
        .search-btn {
          border: 2px solid black;
          outline: none;
          background: transparent;
          font-weight: bold;
          cursor: pointer;
          color: black;
          padding: 10px 60px;
        }
      }
    }
  }
  @media (max-width: 650px) {
    .capsules-section {
      width: 90%;
      .search-form {
        .form-layout {
          flex-direction: column;
          .form-field {
            width: 100%;
            select {
              width: 100%;
            }
            input {
              width: 100%;
            }
          }
        }
      }
    }
    .capsules-section {
      .capsules-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }
  }
  @media (max-width: 650px) {
    .capsules-section {
      .capsules-grid {
        grid-template-columns: repeat(1, 1fr);
      }
    }
  }
`;
