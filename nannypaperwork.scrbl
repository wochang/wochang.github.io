#lang scribble/base
@(require scribble/manual racket/date)
@(require "util.rkt")

@title{Nanny Paperwork (for Massachusetts)}

@emph{Last updated:} @(date->string (current-date) #t)

The purpose of this page is to aggregate all the paperwork needed to hire a nanny in Massachusetts.

For general tips on hiring a nanny, see here:

Also, you can hire someone to handle most of this paperwork for you if that's your preference. Googling for "nanny payroll service" @link["http://payroll.intuit.com/payroll_services/household_payroll.jsp"]{returns} @link["http://www.4nannytaxes.com/"]{lots}  @link["http://www.gtm.com/gtm_household/household.html"]{of} @link["http://www.savvynannypayrollservices.com/"]{options}.

I've roughly organized this guide to list the items in the order you'll need to handle them.

@; ------------------------------ Before Hiring -------------------------------
@section{Before Hiring}

@subsection{Federal Employer Identification Number (EIN)}
You need an EIN from the IRS when filing any kind of tax form. You also need it to get Workers' Compensation Insurance, which is mandatory in Massachusetts. For Massachusetts state tax forms, your federal EIN usually doubles as the state EIN.

How to get an EIN from the IRS:
@itemlist[
@item{Apply @link["http://www.irs.gov/Businesses/Small-Businesses-&-Self-Employed/Apply-for-an-Employer-Identification-Number-%28EIN%29-Online"]{online} (you get the EIN immediately).}
@item{@link["http://www.irs.gov/uac/Form-SS-4,-Application-for-Employer-Identification-Number-%28EIN%29"]{Fill out} form SS-4.}]

@subsection{Worker's Compensation Insurance}
From @link["http://www.mass.gov/lwd/workers-compensation/investigations/who-needs-workers-compensation-insurance-in.html"]{mass.gov}:
@nested[#:style 'inset]{"With limited exceptions, every employer in the Commonwealth with one or more employee(s) is required by law to have a valid workers' compensation policy at all times. This "no fault" insurance not only provides injured workers with medical care and partial wage replacement, but also protects the policyholders from potentially damaging lawsuits. Although most companies in Massachusetts purchase a traditional commercial insurance policy, there are alternative methods of coverage which include licensing as a self insurer, gaining membership in a self insurance group, or obtaining coverage in the Assigned Risk Pool."}

I signed up for the Massachusetts Worker's Compensation Assigned Risk Pool (MWCARP). More info available at the Massachusetts Workers' Compensation Rating and Inspection Bureau (WCRIB) @link["https://www.wcribma.org/mass/default.aspx"]{website} (though the site is pretty dense and I had trouble finding anything there).

Most insurance agencies should be able to help you sign up for assigned risk pool. I don't remember exactly but I probably googled something like "massachusetts workers compensation insurance" and then submitted a bunch of quote requests online. I arbitrarily went with @link["http://www.berryinsurance.com"]{Berry Insurance} and the cost was $260. I think the cost is state-mandated so it probably doesn't matter who you get it through. Also, the MWCARP application they gave me to fill out did not seem company-specific.


@; -------------------------------- First Day ---------------------------------
@section{First Day}

On the first day, you may want to ask your nanny to bring the following items:
@itemlist{
@item{Social Security Card
      
From @link["http://www.irs.gov/publications/p926/"]{IRS Publication 926, Household Employer's Tax Guide}:
@nested[#:style 'inset]{
"You must keep a record of your employee's name and social security number exactly as they appear on his or her social security card if you pay the employee either of the following.

    Social security and Medicare wages of $1,800 or more.

    Wages from which you withhold federal income tax.

You must ask for your employee's social security number no later than the first day on which you pay the wages. You may wish to ask for it when you hire your employee. You should ask your employee to show you his or her social security card. The employee may show the card if it is available. You may, but are not required to, photocopy the card if the employee provides it.

  An employee who does not have a social security number must apply for one on Form SS-5, Application for a Social Security Card. An employee who has lost his or her social security card or whose name is not correctly shown on the card may apply for a replacement card.

  
Employees can get Form SS-5 from any Social Security Administration office or by calling 1-800-772-1213."}}}

@itemlist{@item{ID(s) for I-9 form, ie passport, green card, driver's license, etc.}}

@subsection{@link["http://www.uscis.gov/portal/site/uscis/menuitem.5af9bb95919f35e66f614176543f6d1a/?vgnextoid=31b3ab0a43b5d010VgnVCM10000048f3d6a1RCRD&vgnextchannel=db029c7755cb9010VgnVCM10000045f3d6a1RCRD"]{Form I-9, Employment Eligibility Verification}}

@nested[#:style 'inset]{Purpose of Form:
                        
"Form I-9 is used for verifying the identity and employment authorization of individuals hired for employment in the United States. All U.S. employers must ensure proper completion of Form I-9 for each individual they hire for employment in the United States. This includes citizens and noncitizens. Both employees and employers (or authorized representatives of the employer) must complete the form. On the form, an employee must attest to his or her employment authorization. The employee must also present his or her employer with acceptable documents evidencing identity and employment authorization. The employer must examine the employment eligibility and identity document(s) an employee presents to determine whether the document(s) reasonably appear to be genuine and to relate to the employee and record the document information on the Form I-9. The list of acceptable documents can be found on the last page of the form. Employers must retain Form I-9 for a designated period and make it available for inspection by authorized government officers."}

@nested[#:style 'inset]{Where to File:
                        
"Do not file Form I-9 with USCIS or U.S. Immigrations and Customs Enforcement (ICE). Employers must have a completed Form I-9 on file for each person on their payroll who is required to complete the form. Form I-9 must be retained and stored by the employer either for three years after the date of hire or for one year after employment is terminated, whichever is later. The form must be available for inspection by authorized U.S. Government officials from the Department of Homeland Security, Department of Labor, or Department of Justice."}

@subsection{@link["http://www.irs.gov/uac/Form-W-4,-Employee%27s-Withholding-Allowance-Certificate-1"]{Form W-4, Employee's Withholding Allowance Certificate}}
Use this form to determine how much federal tax to withhold from your nanny's paycheck. You don't need to file this form.

@subsection{@link["http://www.mass.gov/dor/docs/dor/forms/wage-rpt/pdfs/m-4.pdf"]{Form M-4, MA Employee's Withholding Exemption Certificate}}
Use this form to determine how much state tax to withhold from your nanny's paycheck. You don't need to file this form either.

@subsection{Vaccinations}
You may want to ask your nanny for a vaccination record, or to get some vaccines. For example, there was a pertussis (whooping cough) outbreak at the time we were hiring our nanny and our pediatrician recommended vaccination.

@; -------------------------- Paycheck / Withholding --------------------------
@section{Paycheck / Withholding Taxes}

@; ------------------------------- Paying Taxes -------------------------------
@section{Tax Forms / Paying Taxes}

@end-post{nannypaperwork}