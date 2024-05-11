import React, { Component } from 'react'

export class Question extends Component {
  constructor(props) {
    super(props);
  }
  render(props) {
    return (
      <>
        <div className='container'>
          <div className='card mt-5 p-4'>
            <h2>Questions</h2>
            <form onSubmit={this.props.submit}>
              <div className='form-group'>
                <p>3. What are you currently doing ?</p>
                <div className='form-check-inline'>
                  <label htmlFor="html" > <input type="radio" name="q1" value="Teaching" className='form-check-input' /> Teaching</label><br />
                </div>
                <div className='form-check-inline'>
                  <input type="radio" name="q1" value="Student" className='form-check-input' />
                  <label htmlFor="html">Student</label><br />
                </div>
                <div className='form-check-inline'>
                  <input type="radio" name="q1" value="Programmer" className='form-check-input' />
                  <label htmlFor="html">Programmer</label><br />
                </div>
                <div className='form-check-inline'>
                  <input type="radio" name="q1" value="Other" className='form-check-input' />
                  <label htmlFor="html">Other</label><br />
                </div>
                <input type="text" placeholder='Type here if not listed' name="other" className='form-control'></input><br />
              </div>
              <div className='form-group'>
                {/* <div className='form-check-inline'> */}
                <p>4. Please give the rating </p>
                <div className='form-check-inline'>
                  <label htmlFor="html" className='form-check-label'><input type="radio" name="q2" value="Poor" />Poor</label><br />
                </div>
                <div className='form-check-inline'>
                  <label htmlFor="html" className='form-check-label'><input type="radio" name="q2" value="Good" />Good</label><br />
                </div>
                <div className='form-check-inline'>
                  <label htmlFor="html" className='form-check-label'><input type="radio" name="q2" value="Excellent" />Excellent</label><br />
                </div>
              </div>
              <div className='form-group'>
                <p>5. Write your review here.</p>
                <input type="text" name="q3" className='form-control' />
              </div>
              <button className="btn btn-primary" onSubmit={this.nextButton}>Save</button>
            </form >
          </div>
        </div >
      </>
    )
  }
}

export default Question