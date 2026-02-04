# Implementation Guide

## Routing Logic: Selecting the Optimal Payment Rail

The following Python function demonstrates the context-adaptive logic for selecting between `L402_LIGHTNING`, `PAYMAN_AI`, `MASTERCARD_AGENT`, and `VISA_TAP`.

```python
def select_payment_rail(task):
    # Rule 1: Micro-transactions (< $1.00) use Lightning
    if task.amount < 1.00:
        return "L402_LIGHTNING"
    
    # Rule 2: Unbanked Workers use Payman.ai for Fiat off-ramp
    if task.worker.preference == "FIAT_CASH_APP":
        return "PAYMAN_AI"
        
    # Rule 3: Corporate/Enterprise Agents use Visa/Mastercard (Expense Reporting)
    if task.agent.type == "CORPORATE":
        if task.agent.preferred_network == "MASTERCARD":
            return "MASTERCARD_AGENT"
        else:
            return "VISA_TAP"
```
