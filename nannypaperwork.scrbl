#lang scribble/base
@(require scribble/manual 
          scribble/core ; style, element
          scribble/html-properties ; alt-tag, attributes
          racket/date)
@(require "util.rkt")

@(define nanny-title "Nanny Taxes and Paperwork Guide")

@(title #:tag "top" #:style (google-analytics 'hidden) nanny-title)

@;centered{
@(elem
  @bold{@larger{@(larger nanny-title)}}
  @(linebreak)
  @emph{(For Massachusetts)}
  #:style (style #f (list (alt-tag "div")
                          (attributes
                           (list (cons 'class "navsettop"))))))
  
@(parameterize ([date-display-format 'rfc2822])
@margin-note{@emph{Last updated:@linebreak{}} @(date->string (current-date))})

This page describes the taxes and paperwork you have to file when hiring a nanny.

The state taxes are specific to Massachusetts only.

This guide is for people who want to handle the paperwork themselves. If you don't want to deal with the paperwork, there are many companies that will manage things for you. Googling for "nanny payroll service" @link["http://payroll.intuit.com/payroll_services/household_payroll.jsp"]{returns} @link["http://www.4nannytaxes.com/"]{lots}  @link["http://www.gtm.com/gtm_household/household.html"]{of} @link["http://www.savvynannypayrollservices.com/"]{options}.

The items in this guide are roughly organized in the order you'll need to handle them.



@; ------------------------------ Before Hiring -------------------------------
@section{Before Hiring}

@; subsec: EIN ----------------------------------------
@subsec[#:toc-name "Employer ID Num (EIN)"]{Federal Employer Identification Number (EIN)}


Before you can file any nanny taxes, you need to obtain an EIN from the IRS. 

You'll also need this number when applying for Workers' Compensation Insurance (mandatory in Massachusetts) and when paying state taxes.

Ways to get an EIN:
@itemlist[
@item{Apply @link["http://www.irs.gov/Businesses/Small-Businesses-&-Self-Employed/Apply-for-an-Employer-Identification-Number-%28EIN%29-Online"]{online} (you get the EIN immediately).}
@item{Fill out and mail in @link["http://www.irs.gov/uac/Form-SS-4,-Application-for-Employer-Identification-Number-%28EIN%29"]{Form SS-4}.}]

@; subsec: worker's comp ----------------------------------------

@subsec[#:toc-name "Worker's Comp Insurance"]{Worker's Compensation Insurance}

From the @link["http://www.mass.gov/lwd/workers-compensation/investigations/who-needs-workers-compensation-insurance-in.html"]{Massachusetts Office of Labor and Workforce Development}:

@nested[#:style 'inset]{"With limited exceptions, every employer in the Commonwealth with one or more employee(s) is required by law to have a valid workers' compensation policy at all times. This "no fault" insurance not only provides injured workers with medical care and partial wage replacement, but also protects the policyholders from potentially damaging lawsuits. Although most companies in Massachusetts purchase a traditional commercial insurance policy, there are alternative methods of coverage which include licensing as a self insurer, gaining membership in a self insurance group, or obtaining coverage in the Assigned Risk Pool."}

Nanny employers can get coverage via the Massachusetts Worker's Compensation Assigned Risk Pool (MWCARP). Get more info @link["https://www.wcribma.org/mass/default.aspx"]{here} (though this site confuses me).

Most insurance agencies should be able to sign you up for assigned risk pool. I Googled for "massachusetts workers compensation insurance" then submitted a bunch of quote requests online. I arbitrarily went with @link["http://www.berryinsurance.com"]{Berry Insurance} (they were first to reply) and the cost was $260. I think the cost is state-mandated so it probably doesn't matter who you sign up with.

@italic{UPDATE:} I renewed the worker's comp policy after one year and I was audited to submit employee name and wage information. I was able to submit the information online. I don't know if this is a state rule or if it is company-specific.

@; subsec: dependent care FSA ----------------------------------------
@subsec{Dependent Care FSA}

If your job provides you the benefit, sign up for a Dependent Care FSA. Then you can set aside pre-tax dollars with which to pay your nanny.

Our FSA allows a $5,000 maximum annual contribution.

Typically, you can only sign up for an FSA during "open enrollment", which happens once a year. But "life events" like marriage and birth give you additional open enrollments during which you can change your benefits.





@; -------------------------------- First Day ---------------------------------
@section[#:tag "firstday"]{First Day}

You should ask your nanny to bring the following items on the first day:
@itemlist[
@item{ID(s), ie passport, green card, driver's license, etc., needed for Form I-9}
@item{Social Security Card
      
From @link["http://www.irs.gov/publications/p926/"]{IRS Publication 926, Household Employer's Tax Guide}:
@nested[#:style 'inset]{
"You must keep a record of your employee's name and social security number exactly as they appear on his or her social security card if you pay the employee either of the following.

    Social security and Medicare wages of $1,800 or more.

    Wages from which you withhold federal income tax.

You must ask for your employee's social security number no later than the first day on which you pay the wages. You may wish to ask for it when you hire your employee. You should ask your employee to show you his or her social security card. The employee may show the card if it is available. You may, but are not required to, photocopy the card if the employee provides it.

  An employee who does not have a social security number must apply for one on Form SS-5, Application for a Social Security Card. An employee who has lost his or her social security card or whose name is not correctly shown on the card may apply for a replacement card.

  
Employees can get Form SS-5 from any Social Security Administration office or by calling 1-800-772-1213."}}
]

Your nanny should fill out the following forms on the first day:

@; subsec: I-9 ----------------------------------------
@subsec[#:toc-name "Form I-9 (USCIS)"]{USCIS @link["http://www.uscis.gov/portal/site/uscis/menuitem.5af9bb95919f35e66f614176543f6d1a/?vgnextoid=31b3ab0a43b5d010VgnVCM10000048f3d6a1RCRD&vgnextchannel=db029c7755cb9010VgnVCM10000045f3d6a1RCRD"]{Form I-9}, Employment Eligibility Verification}


@nested[#:style 'inset]{Purpose of Form:
                        
"Form I-9 is used for verifying the identity and employment authorization of individuals hired for employment in the United States. All U.S. employers must ensure proper completion of Form I-9 for each individual they hire for employment in the United States. This includes citizens and noncitizens. Both employees and employers (or authorized representatives of the employer) must complete the form. On the form, an employee must attest to his or her employment authorization. The employee must also present his or her employer with acceptable documents evidencing identity and employment authorization. The employer must examine the employment eligibility and identity document(s) an employee presents to determine whether the document(s) reasonably appear to be genuine and to relate to the employee and record the document information on the Form I-9. The list of acceptable documents can be found on the last page of the form. Employers must retain Form I-9 for a designated period and make it available for inspection by authorized government officers."}

@nested[#:style 'inset]{Where to File:
                        
"Do not file Form I-9 with USCIS or U.S. Immigrations and Customs Enforcement (ICE). Employers must have a completed Form I-9 on file for each person on their payroll who is required to complete the form. Form I-9 must be retained and stored by the employer either for three years after the date of hire or for one year after employment is terminated, whichever is later. The form must be available for inspection by authorized U.S. Government officials from the Department of Homeland Security, Department of Labor, or Department of Justice."}

@; subsec: W-4 ----------------------------------------
@subsec[#:toc-name "Form W-4 (IRS)"]{IRS @link["http://www.irs.gov/uac/Form-W-4,-Employee%27s-Withholding-Allowance-Certificate-1"]{Form W-4}, Employee's Withholding Allowance Certificate}

You need this form when determining how much federal tax to withhold from your nanny's paycheck. You don't need to file this form.

@;subsec: M-4 ----------------------------------------
@subsec[#:toc-name "Form M-4 (MA DOR)"]{MA DOR @link["http://www.mass.gov/dor/docs/dor/forms/wage-rpt/pdfs/m-4.pdf"]{Form M-4}, Employee's Withholding Exemption Certificate}

You need this form when determining how much state tax to withhold from your nanny's paycheck. You don't need to file this form either.

@;subsec: vaccines ----------------------------------------
@subsec{Vaccinations}

Finally, you may want to ask your nanny for a vaccination record, and/or to get some vaccines. For example, there was a pertussis (whooping cough) outbreak when we hired our nanny and our pediatrician recommended getting the TdaP booster vaccine.




@; -------------------------- Paycheck / Withholding Taxes --------------------------
@section{Paycheck and Withholding}

@; subsec: paycheck ----------------------------------------
@subsec{Paycheck}

We pay our nanny bimonthly (twice a month).

Along with each paycheck, we also give our nanny a paystub with the following information:
@itemlist[
 @item{pay date, pay period start / end}
 @item{employee/employer's name and address}
 @item{nanny's filing status and allowances (as reported on forms W-4 and M-4)}
 @item{current and year-to-date:
 @itemlist[
  @item{salary paid}
  @item{federal, SS, Medicare, MA, and total taxes withheld}
  @item{net salary paid}]}
 @item{check number}
 @item{vacation days used}
 ]

@; subsec: withholding taxes ----------------------------------------
@subsec{Withholding Taxes}

Here are the taxes we withhold on each paycheck.

@margin-note{The table lists the amounts withheld from the nanny's paycheck. In other words, these are the taxes that the nanny, i.e., the @emph{employee}, owes. You just pay it on the nanny's behalf. This is separate from the additional taxes that you, the @emph{employer}, have to pay.}

@centered{
  @tabular[#:style style:table
           (list 
            (list "Taxes To Withhold (2013):" 'cont 'cont)
            (list @bold{Tax Type}   @bold{Rate} @bold{Taxable Income})
            (list "Social Security (OASDI)"   "6.2%" "$113,700")
            (list "Medicare"  "1.45%" "all")
            (list @link["http://www.irs.gov/Businesses/Small-Businesses-&-Self-Employed/Questions-and-Answers-for-the-Additional-Medicare-Tax"]{additional Medicare} "0.90%" ">$200,000")
            (list "Federal" "varies" "all")
            (list "MA State" "5.25%" "all"))]}


To compute withholding for social security and medicare, just compute the percentage. Note that starting 2013, there's an additional Medicare tax of 0.90% for income over $200,000 (for single filers; the threshold is $250,000 for married filers).

@margin-note{You have to withhold social security and medicare taxes,  @link["http://www.irs.gov/publications/p926/ar02.html#en_US_2013_publink100086732"]{but I don't think withholding income tax is required} for household employees. You should discuss with your nanny.}

For federal withholding, the IRS provides @link["http://www.irs.gov/publications/p15/ar03.html#en_US_2013_publink1000295957"]{tables} (Publication 15) to help with the calculations. MA also provides similar @link["http://www.mass.gov/dor/docs/dor/forms/wage-rpt/pdfs/circ-m12.pdf"]{tables} (circular M). 

There are also @link["http://www.paycheckcity.com/calculator/salary/"]{paycheck calculators} available online that may be more convenient.



@; ------------------------------- Nanny's Taxes ------------------------------
@section{Nanny's Taxes}

Even if you withhold and pay your nanny's taxes on your tax return, your nanny still must file her own separate tax return.

@subsec[#:toc-name "Form W-2 (IRS)"]{IRS Form W-2, Wage and Tax Statement}

At the end of the year, you have to give your nanny a @link["http://www.irs.gov/uac/Form-W-2,-Wage-and-Tax-Statement"]{W-2 Form}.  @link["http://www.irs.gov/instructions/iw2w3/index.html"]{These instructions} tell you where to submit copies of the form.

@subsec{A Note on @link["http://www.irs.gov/publications/p501/ar02.html#en_US_2012_publink1000220721"]{Filing Status}}

Our nanny is a resident alien and is married, but her husband lives outside the US and does not have a social security number.

@itemlist[
@item{She cannot file as married unless the husband has a Social Security number and wants his income reported in the US.}
@item{She has a son who lives with her and would be eligible to file as @link["http://www.irs.gov/publications/p501/ar02.html#en_US_2012_publink1000220775"]{head of household} except her son is over the @link["http://www.irs.gov/publications/p501/ar02.html#en_US_2012_publink1000220886"]{qualifying age.}}
@item{Thus, our nanny has to file as single.}]



@; ------------------------------- Paying Taxes -------------------------------
@section{Paying Your Taxes}

This section describes the taxes you have to pay, some of which are the withheld taxes from the last section.

@; subsec: paying MA taxes ----------------------------------------
@subsec{Paying MA State Taxes}

@margin-note{MA employer taxes are paid @emph{quarterly}, so you don't need to do anything special when filing your @emph{annual} state tax return.}

@subsubsec{Unemployment Tax}

All employers in Massachusetts have to pay an Unemployment Insurance (UI) tax to the Division of Unemployment Assistance (DUA). The rate in 2012 was 2.83%. I also had to contribute to a Workforce Training Fund, at a rate of 0.060%.

Both are paid online, through the @link["http://www.mass.gov/lwd/unemployment-insur/ui-online-dua-quest/"]{QUEST} system (I don't know what it stands for). @link["https://uionline.detma.org/Employer/Revenue/Registration/EmployerRegistration/RegisterEmployer.ASPX"]{Register first} to get a login. After that, you pay quarterly. Payment is due a month after the end of the quarter. After that, a fine is added to the amount you owe.

@subsubsec{Withheld Income Tax}

If you withhold state income tax from your nanny's paycheck, you pay it on her behalf to the MA Department of Revenue (DOR). This is done through their @link["https://wfb.dor.state.ma.us/webfile/Business/Public/Webforms/Login/Login.aspx"]{WebFile for Business} site. Again, you have to register first to get a login. Then, you again pay at the end of each quarter.


@; subsec: paying federal taxes ----------------------------------------
@subsec{Paying Federal Taxes}

@subsubsec[#:toc-name "SS and Medicare"]{Social Security and Medicare}

Employers have to pay an additional @emph{employer's} social security and medicare tax. This is on top of the Social Security and Medicare tax you withheld from the nanny's paycheck and paid on the nanny's behalf. 

In 2013, the employer and employee Social Security and Medicare tax rates were the same: 6.2% and 1.45%, respectively.

There is no employer match for @link["http://www.irs.gov/Businesses/Small-Businesses-&-Self-Employed/Questions-and-Answers-for-the-Additional-Medicare-Tax"]{Additional Medicare Tax}.

@subsubsec{FUTA}

Employers have to pay a Federal Unemployment Tax (due to the @link["http://www.irs.gov/Individuals/International-Taxpayers/Federal-Unemployment-Tax"]{Federal Unemployment Tax Act (FUTA)}).

The 2012 rate was 7.00% on the first $7,000.

However, I think you get @link["http://www.irs.gov/Individuals/International-Taxpayers/Federal-Unemployment-Tax"]{FUTA credit} if you pay @link["http://www.mass.gov/lwd/unemployment-insur/ui-online-dua-quest/quest-project-info/system-faq/futa.html"]{state unemployment taxes}.

Residents in a @link["http://www.irs.gov/Businesses/Small-Businesses-&-Self-Employed/FUTA-Credit-Reduction"]{credit reduction state} get less FUTA credit but it seems like @link["http://en.wikipedia.org/wiki/FUTA_credit_reduction"]{Massachusetts is not one of these states.}

@subsubsec{Schedule H}

All the above federal taxes, in addition to the Social Security, Medicare, and federal income taxes you withheld from your nanny's paycheck, are reported on your federal tax return, using the @link["http://www.irs.gov/instructions/i1040sh/"]{Schedule H} form. (If you use any sort of tax software, this form should automatically get generated for you.)

@subsec{Employer Taxes Summary}

Here is a summary of all nanny taxes that employers have to pay.

@centered{@tabular[#:style style:table
         (list 
          (list "Employer Taxes (2013):" 'cont 'cont  'cont)
          (list @bold{Tax}   @bold{Rate} @bold{Taxable Income} @bold{How to Pay})
          (list "MA Unemployment Insurance (UI)" "2.83%" "all"  @link["http://www.mass.gov/lwd/unemployment-insur/ui-online-dua-quest/"]{QUEST})
          (list "MA Workforce Training Fund" "0.060%" "all" @link["http://www.mass.gov/lwd/unemployment-insur/ui-online-dua-quest/"]{QUEST})
          (list "Social Security (OASDI)"   "6.20%" "$113,700" "tax return")
          (list "Medicare"  "1.45%" "all" "tax return")
          (list "Federal Unemployment (FUTA)*" "6.00%" "$7,000" "tax return"))]}
* = may be reduced







@end-post{nannypaperwork}