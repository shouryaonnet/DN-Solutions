SET SERVEROUTPUT ON;

DECLARE
BEGIN
    FOR cust IN (
        SELECT CustomerID,
               Name,
               Balance
        FROM Customers
        WHERE Balance > 10000
    )
    LOOP
        DBMS_OUTPUT.PUT_LINE(
            'VIP Customer: '
            || cust.Name
            || ' (ID: '
            || cust.CustomerID
            || ')'
        );
    END LOOP;
END;
/