import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

describe('App', () => {
    const renderWithRouter = (ui) => {
        return render(<BrowserRouter>{ui}</BrowserRouter>);
    };

    it('renders main heading and home link', () => {
        renderWithRouter(<App />);
        expect(screen.getByRole('heading', { level: 1, name: /Happy Paradise/i })).toBeInTheDocument();
        expect(screen.getByRole('link', { name: /Home/i })).toBeInTheDocument();
        expect(screen.getByRole('link', { name: /Enquiry/i })).toBeInTheDocument();
    });

    it('navigates to enquiry page', () => {
        renderWithRouter(<App />);
        const enquiryLink = screen.getByRole('link', { name: /Enquiry/i });
        fireEvent.click(enquiryLink);

        // Check for Enquiry Form Title
        expect(screen.getByRole('heading', { level: 2, name: /Enquiry Form/i })).toBeInTheDocument();
        // Check for Inputs
        expect(screen.getByLabelText(/Name/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Phone Number/i)).toBeInTheDocument();
    });
});
