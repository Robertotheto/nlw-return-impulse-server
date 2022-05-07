import { SubmitFeedbackUseCase } from "./submit-feedback-usecase";

const createFeedbackSpy = jest.fn();
const sendEmailSpy = jest.fn();

const submitFeedback = new SubmitFeedbackUseCase(
  { create: createFeedbackSpy },
  { sendEmail: sendEmailSpy },
)

describe('Submit Feedback', () => {
  it('should be able to submit feedback', async () => {
    await expect(submitFeedback.execute({
      type: 'Bug',
      comment: 'Test',
      screenshot: 'data:image/png;base64,test',
    })).resolves.not.toThrow()
    expect(createFeedbackSpy).toHaveBeenCalled()
    expect(sendEmailSpy).toHaveBeenCalled()
  })
  it('should not be able to submit feedback without type', async () => {
    await expect(submitFeedback.execute({
      type: '',
      comment: 'Test',
      screenshot: 'data:image/png;base64,test',
    })).rejects.toThrow()
  })
  it('should not be able to submit feedback without comment', async () => {
    await expect(submitFeedback.execute({
      type: 'Bug',
      comment: '',
      screenshot: 'data:image/png;base64,test',
    })).rejects.toThrow()
  })
  it('should not be able to submit feedback with an invalid screenshot', async () => {
    await expect(submitFeedback.execute({
      type: 'Bug',
      comment: 'Test',
      screenshot: 'test',
    })).rejects.toThrow()
  })
})