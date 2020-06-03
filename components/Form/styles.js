import styled from 'styled-components'

export const UrlForm = styled.form`
  position: relative;
  margin: 0 auto;

  justify-self: center;
  display: flex;
  justify-items: center;

  width: 75vw;
  min-width: 300px;
  max-width: 600px;

  height: 60px;

  border-radius: 5px;
  font-family: 'Trebuchet MS', Arial, Helvetica, Sans-serif;
  font-size: 0.8em;
`

export const FormInput = styled.input`
  flex-grow: 1;
  padding: 0 25px;

  color: #3e64ff;
  border: 1px solid #3e64ff;
  border-radius: 8px 0 0 8px;

  line-height: 1;
`

export const FormButton = styled.button`
  /* margin-left: 40px; */

  padding: 1rem 2.5rem;

  background-color: #3e64ff;
  color: #fff;
  font-size: 0.9rem;
  font-weight: bold;
  white-space: nowrap;

  border: none;
  border-radius: 0 8px 8px 0;

  cursor: pointer;
`
