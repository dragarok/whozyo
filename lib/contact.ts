// THE ONE ADDRESS THE LEGAL PAGES USE.
//
// Privacy, Terms, Support, Delete-account, the service-centre directory and the
// footer all point a reader at an address to write to, and those pages make
// promises about it ("write here to have your information removed"). They must
// therefore never disagree with each other. Until 2026-08-12 the string was
// re-declared as a separate `const SUPPORT_EMAIL` in four page files and
// hard-coded in three more places; they happened to agree, which is not the
// same as being unable to disagree. One export, imported everywhere, makes the
// agreement structural.
//
// KNOWN AND UNRESOLVED — for the operator, not for an agent to guess:
// the marketing surfaces use a DIFFERENT domain (hello@ / mechanics@ /
// workshops@whoisyourmechanic.com in components/FAQ.tsx and
// components/Mechanics.tsx) while everything legal uses @whozyo.com. Which
// domain actually receives mail is a question about DNS and a mailbox, not
// about this repo, and it cannot be answered from here. Do NOT "fix" the split
// by making one side match the other — that would silently redirect the address
// people are told to use for deletion requests. Get the answer first.
export const SUPPORT_EMAIL = "support@whozyo.com";
